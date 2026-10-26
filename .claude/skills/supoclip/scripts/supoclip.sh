#!/usr/bin/env bash
# Thin CLI over the SupoClip REST API. See ../SKILL.md for usage.
set -euo pipefail

API="${SUPOCLIP_API_URL:-https://api.supoclip.com}"
API="${API%/}"
OUT="${SUPOCLIP_DOWNLOAD_DIR:-./supoclip-downloads}"

die() { echo "error: $*" >&2; exit 1; }
need_key() { [[ -n "${SUPOCLIP_API_KEY:-}" ]] || die "SUPOCLIP_API_KEY is not set (get one at supoclip.com → Settings → API Keys)"; }
pretty() { if command -v jq >/dev/null; then jq .; else cat; fi; }

# call METHOD PATH [curl args...] — authenticated JSON request, fails on HTTP errors
call() {
  local method="$1" path="$2"; shift 2
  need_key
  curl -sS --fail-with-body -X "$method" "$API$path" \
    -H "Authorization: Bearer $SUPOCLIP_API_KEY" "$@"
}
public() { curl -sS --fail-with-body "$API$1"; }

json_get() { python3 -c 'import json,sys; print(json.load(sys.stdin).get(sys.argv[1], ""))' "$1"; }

cmd_create() {
  local src="${1:-}"; shift || true
  [[ -n "$src" ]] || die "usage: create <url|file> [--length L] [--format F] [--mode M] [--template T] [--title T] [--no-subtitles] [--broll]"
  local length=auto format=vertical mode=fast template=default title="" subs=true broll=false
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --length) length="$2"; shift 2 ;;
      --format) format="$2"; shift 2 ;;
      --mode) mode="$2"; shift 2 ;;
      --template) template="$2"; shift 2 ;;
      --title) title="$2"; shift 2 ;;
      --no-subtitles) subs=false; shift ;;
      --broll) broll=true; shift ;;
      *) die "unknown option: $1" ;;
    esac
  done

  if [[ -f "$src" ]]; then
    local file="$src"
    echo "Uploading $file ..." >&2
    src="$(call POST /upload -F "video=@$file" | json_get video_path)"
    [[ -n "$src" ]] || die "upload did not return a video_path"
    [[ -n "$title" ]] || title="$(basename "$file")"
  fi

  local body
  body="$(python3 - "$src" "$title" "$length" "$format" "$mode" "$template" "$subs" "$broll" <<'PY'
import json, sys
src, title, length, fmt, mode, template, subs, broll = sys.argv[1:]
source = {"url": src}
if title:
    source["title"] = title[:300]
print(json.dumps({
    "source": source,
    "clip_length": length,
    "output_format": fmt,
    "processing_mode": mode,
    "caption_template": template,
    "add_subtitles": subs == "true",
    "include_broll": broll == "true",
    "cut_long_pauses": True,
    "remove_filler_words": True,
}))
PY
)"
  call POST /tasks/ -H "Content-Type: application/json" -d "$body" | pretty
}

cmd_wait() {
  local id="${1:?usage: wait <task_id> [timeout_seconds]}" timeout="${2:-1800}" start status
  start=$(date +%s)
  while :; do
    local task; task="$(call GET "/tasks/$id")"
    status="$(echo "$task" | json_get status)"
    echo "[$(date +%H:%M:%S)] $status $(echo "$task" | json_get progress)% $(echo "$task" | json_get progress_message)" >&2
    case "$status" in completed|error|cancelled) echo "$task" | pretty; return ;; esac
    (( $(date +%s) - start > timeout )) && die "still '$status' after ${timeout}s"
    sleep 10
  done
}

download() { # download PATH FILE [curl args...]
  local path="$1" file="$2"; shift 2
  mkdir -p "$OUT"
  call GET "$path" -L -o "$OUT/$file" "$@"
  echo "$OUT/$file"
}

cmd_download_all() {
  local id="${1:?usage: download-all <task_id>}"
  call GET "/tasks/$id/clips" | python3 -c '
import json, sys
d = json.load(sys.stdin)
for c in (d.get("clips", d) if isinstance(d, dict) else d):
    print(c["id"])' | while read -r cid; do download "/tasks/$id/clips/$cid/file" "clip_${cid}.mp4"; done
}

cmd="${1:-help}"; shift || true
case "$cmd" in
  health)       public / | pretty; public /health | pretty ;;
  templates)    public /caption-templates | pretty ;;
  transitions)  public /transitions | pretty ;;
  broll-status) public /broll/status | pretty ;;
  fonts)        call GET /fonts | pretty ;;
  billing)      call GET /tasks/billing/summary | pretty ;;
  create)       cmd_create "$@" ;;
  tasks)        call GET "/tasks/?limit=${1:-20}" | pretty ;;
  task)         call GET "/tasks/${1:?task_id}" | pretty ;;
  wait)         cmd_wait "$@" ;;
  clips)        call GET "/tasks/${1:?task_id}/clips" | pretty ;;
  download)     download "/tasks/${1:?task_id}/clips/${2:?clip_id}/file" "clip_${2}.mp4" ;;
  download-all) cmd_download_all "$@" ;;
  export)       download "/tasks/${1:?task_id}/clips/${2:?clip_id}/export" "clip_${2}_${3:-tiktok}.mp4" -G --data-urlencode "preset=${3:-tiktok}" ;;
  cancel)       call POST "/tasks/${1:?task_id}/cancel" | pretty ;;
  resume)       call POST "/tasks/${1:?task_id}/resume" | pretty ;;
  delete)       call DELETE "/tasks/${1:?task_id}" | pretty ;;
  *) sed -n '/^## Workflow/,/^## Guidance/p' "$(dirname "$0")/../SKILL.md" ;;
esac
