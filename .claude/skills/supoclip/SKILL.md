---
name: supoclip
description: Turn long videos (YouTube links, direct URLs, or local MP4s in this repo such as the restaurant hero videos) into short vertical, subtitled clips for TikTok / Reels / Shorts using SupoClip (open-source OpusClip alternative, https://github.com/FujiwaraChoki/supoclip). Use when the user asks to make clips, shorts, reels, or TikToks from a video, check SupoClip task status, or download/export SupoClip clips.
---

# SupoClip

SupoClip runs a long video through transcription and AI clip selection, then renders
vertical clips with burned-in captions. It runs **asynchronously**: you create a task,
poll it until it finishes, then download the clips.

There are two ways to drive it. Use the first one that is available:

1. **MCP tools** (`supoclip_*`). These are registered in `.mcp.json` at the repo root.
   If `mcp__supoclip__*` tools are listed, use them. They cover health, create,
   wait, list, download, and export.
2. **The helper script** `.claude/skills/supoclip/scripts/supoclip.sh`, which calls the
   REST API with curl. Use it when the MCP server isn't loaded, or to upload a
   **local** video file (the MCP server only accepts URLs).

## Configuration

Read from the environment (never hard-code or commit keys):

| Variable | Default | Notes |
|----------|---------|-------|
| `SUPOCLIP_API_KEY` | – | `sk_…` key from supoclip.com → Settings → API Keys (or your own instance). Required. |
| `SUPOCLIP_API_URL` | `https://api.supoclip.com` | Set to `http://localhost:8000` for a self-hosted backend. |
| `SUPOCLIP_DOWNLOAD_DIR` | `./supoclip-downloads` | Where clips are saved (git-ignored). |

If `SUPOCLIP_API_KEY` is missing, stop and tell the user how to get one rather than
guessing. A `402` response means the hosted plan or quota is exhausted, so run
`billing` and report the result.

## Workflow

```bash
S=.claude/skills/supoclip/scripts/supoclip.sh

$S health                                   # check the API is reachable
$S templates                                # caption styles (default, hormozi, mrbeast, …)

# Source: a URL…
$S create "https://youtu.be/VIDEO_ID" --length short --template hormozi
# …or a local file in this repo (uploads it first, then creates the task)
$S create "./The-Barbaross-Hero-No-Subtitles.mp4" --length short --format vertical

$S wait <task_id>                           # polls until completed / error / cancelled
$S clips <task_id>                          # clips with start/end times + virality_score
$S download <task_id> <clip_id>             # raw MP4
$S export <task_id> <clip_id> tiktok        # re-encoded preset: tiktok | reels | shorts
$S download-all <task_id>                   # every clip of a task
```

The `create` options map to the API fields:

- `--length auto|short|medium|long`: auto 15–60s, short 15–30s, medium 30–60s, long 60–120s.
- `--format vertical|vertical_fit|vertical_pan|vertical_split|original`
- `--mode fast|balanced|quality`
- `--template <caption_template_id>` and `--no-subtitles`
- `--broll`, which adds B-roll overlays (check `broll-status` first).
- `--title "…"`

Other commands are `tasks`, `task <id>`, `cancel <id>`, `resume <id>`, `delete <id>`,
`fonts`, `transitions`, `broll-status`, and `billing`.

## Guidance

- Processing a video takes minutes. After `create`, use `wait`. Use a background
  shell for long videos instead of blocking the turn.
- `delete` permanently removes a task and its clips, so confirm with the user first.
- Summarize results for the user: each clip's title, duration, virality score, and
  the saved file path. Downloaded clips land in `SUPOCLIP_DOWNLOAD_DIR`. Don't
  commit them, because MP4s bloat the repo.
- Brand context for this repo: The Barbaross is a restaurant site. For promo clips,
  prefer `--length short`, `--format vertical`, and an energetic caption template, and
  suggest the TikTok/Reels presets.

## Self-hosting (optional)

```bash
git clone https://github.com/FujiwaraChoki/supoclip && cd supoclip
cp .env.example .env   # set ASSEMBLY_AI_API_KEY (or TRANSCRIPTION_PROVIDER=whisper) and an LLM key + LLM=...
./start.sh             # frontend :3107, backend :8000 (docs at /docs)
export SUPOCLIP_API_URL=http://localhost:8000
```

Create an API key in the local app under **Agents & API** (`/settings/api-keys`).

## Free on a Windows PC

YouTube blocks downloads from cloud runners. A home PC works, so `scripts/windows/supoclip-local.ps1`
runs the whole stack locally (Docker Desktop + Whisper + free Gemini key) and saves clips to
`Videos\SupoClip\<task id>\`:

```powershell
iwr https://raw.githubusercontent.com/abdobh29/The-Barbaross/main/.claude/skills/supoclip/scripts/windows/supoclip-local.ps1 -OutFile supoclip.ps1 -UseBasicParsing
powershell -ExecutionPolicy Bypass -File .\supoclip.ps1 -Url "https://youtu.be/VIDEO_ID"
```
