# Run SupoClip for free on a Windows PC and turn a video into ready-to-post clips.
# Needs Docker Desktop (running). First run builds images (~10-20 min), later runs are fast.
#
#   powershell -ExecutionPolicy Bypass -File supoclip-local.ps1 -Url "https://youtu.be/VIDEO_ID"
#
# Clips are saved to Videos\SupoClip\<task id>\.
param(
    [Parameter(Mandatory = $true)][string]$Url,
    [ValidateSet("auto", "short", "medium", "long")][string]$Length = "auto",
    [string]$Template = "hormozi",
    [ValidateSet("vertical", "vertical_fit", "vertical_pan", "vertical_split", "original")][string]$Format = "vertical",
    [ValidateSet("tiktok", "reels", "shorts", "none")][string]$Preset = "tiktok",
    [ValidateSet("base", "small", "medium")][string]$WhisperModel = "small",
    [string]$GeminiModel = "gemini-3-flash-preview",
    [string]$InstallDir = "$HOME\supoclip"
)
$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$Api = "http://localhost:8000"

function Step($msg) { Write-Host "`n==> $msg" -ForegroundColor Cyan }

Step "Checking Docker"
docker info *> $null
if ($LASTEXITCODE -ne 0) { throw "Docker Desktop is not running. Install it from https://www.docker.com/products/docker-desktop/ and start it." }

if (-not (Test-Path "$InstallDir\docker-compose.yml")) {
    Step "Downloading SupoClip to $InstallDir"
    $zip = "$env:TEMP\supoclip.zip"
    Invoke-WebRequest "https://github.com/FujiwaraChoki/supoclip/archive/refs/heads/main.zip" -OutFile $zip -UseBasicParsing
    Expand-Archive $zip "$env:TEMP\supoclip-src" -Force
    Move-Item "$env:TEMP\supoclip-src\supoclip-main" $InstallDir
    Remove-Item $zip, "$env:TEMP\supoclip-src" -Recurse -Force
}
Set-Location $InstallDir

$envFile = Join-Path $InstallDir ".env"
if (-not (Test-Path $envFile)) {
    Step "First-time setup"
    $gemini = Read-Host "Paste your free Gemini API key (aistudio.google.com)"
    $secret = -join ((1..32) | ForEach-Object { "{0:x2}" -f (Get-Random -Maximum 256) })
    $lines = @(
        "SELF_HOST=true",
        "BACKEND_CPU_ONLY=true",
        "TRANSCRIPTION_PROVIDER=whisper",
        "WHISPER_MODEL_SIZE=$WhisperModel",
        "LLM=google-gla:$GeminiModel",
        "GOOGLE_API_KEY=$gemini",
        "BACKEND_AUTH_SECRET=$secret"
    )
    # UTF-8 without BOM, otherwise docker compose misreads the first variable
    [IO.File]::WriteAllText($envFile, ($lines -join "`n") + "`n", (New-Object Text.UTF8Encoding $false))
}

Step "Starting SupoClip (first run builds images, be patient)"
docker compose up -d --build --wait --wait-timeout 1800 postgres redis backend worker
if ($LASTEXITCODE -ne 0) { throw "SupoClip did not start. Run 'docker compose logs backend worker' in $InstallDir." }

Step "Creating a local API key"
$key = "sk_" + (-join ((1..24) | ForEach-Object { "{0:x2}" -f (Get-Random -Maximum 256) }))
$sha = [Security.Cryptography.SHA256]::Create()
$hash = -join ($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($key)) | ForEach-Object { $_.ToString("x2") })
$sql = @"
INSERT INTO users (id, name, email, "emailVerified") VALUES ('local-pc', 'Local PC', 'local@localhost', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO api_keys (user_id, name, key_hash, key_prefix) VALUES ('local-pc', 'local script', '$hash', '$($key.Substring(0, 10))');
"@
$sql | docker compose exec -T postgres psql -U supoclip -d supoclip -v ON_ERROR_STOP=1 | Out-Null
if ($LASTEXITCODE -ne 0) { throw "Could not create the API key." }
$headers = @{ Authorization = "Bearer $key" }

Step "Creating clip task for $Url"
$body = @{
    source              = @{ url = $Url }
    clip_length         = $Length
    output_format       = $Format
    processing_mode     = "fast"
    caption_template    = $Template
    add_subtitles       = $true
    include_broll       = $false
    cut_long_pauses     = $true
    remove_filler_words = $true
} | ConvertTo-Json -Depth 4
$task = Invoke-RestMethod "$Api/tasks/" -Method Post -Headers $headers -ContentType "application/json" -Body $body
$id = $task.task_id
Write-Host "Task: $id"

Step "Processing (transcription runs on your CPU, a long podcast can take a while)"
do {
    Start-Sleep -Seconds 15
    $t = Invoke-RestMethod "$Api/tasks/$id" -Headers $headers
    Write-Host ("[{0:HH:mm:ss}] {1} {2}% {3}" -f (Get-Date), $t.status, $t.progress, $t.progress_message)
} while ($t.status -notin @("completed", "error", "cancelled"))
if ($t.status -ne "completed") { throw "Task ended with status '$($t.status)'. See: docker compose logs worker" }

$out = Join-Path ([Environment]::GetFolderPath("MyVideos")) "SupoClip\$id"
New-Item -ItemType Directory -Force $out | Out-Null
$res = Invoke-RestMethod "$Api/tasks/$id/clips" -Headers $headers
$clips = if ($res.clips) { $res.clips } else { $res }

Step "Downloading $(@($clips).Count) clips to $out"
$i = 0
foreach ($c in $clips) {
    $i++
    $path = if ($Preset -eq "none") { "/tasks/$id/clips/$($c.id)/file" } else { "/tasks/$id/clips/$($c.id)/export?preset=$Preset" }
    $file = Join-Path $out ("{0:D2}_{1}.mp4" -f $i, $c.id)
    Invoke-WebRequest "$Api$path" -Headers $headers -OutFile $file -UseBasicParsing
    Write-Host ("{0,2}. {1}  ({2} -> {3})  virality: {4}" -f $i, $c.title, $c.start_time, $c.end_time, $c.virality_score)
}
$clips | ConvertTo-Json -Depth 6 | Set-Content (Join-Path $out "clips.json")

Step "Done"
Invoke-Item $out
