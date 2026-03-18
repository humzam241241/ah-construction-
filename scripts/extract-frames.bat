@echo off
title Extract hero video frames
cd /d "%~dp0\.."

set "VIDEO=d6ti69q344qg008009q0.mp4"
set "OUT=public\hero-frames"
set "FPS=240"

if not exist "%VIDEO%" (
  echo ERROR: Video file not found: %VIDEO%
  echo Place your MP4 in the project root and run this script again.
  exit /b 1
)

if not exist "%OUT%" mkdir "%OUT%"

echo Extracting frames at %FPS% fps into %OUT%...
echo.

ffmpeg -y -i "%VIDEO%" -vf "fps=%FPS%,scale=1920:-2:flags=lanczos" -q:v 2 "%OUT%\frame_%%04d.jpg" 2>&1

if %ERRORLEVEL% neq 0 (
  echo.
  echo FFmpeg failed. Install FFmpeg and add it to PATH: https://ffmpeg.org/download.html
  exit /b 1
)

node "%~dp0write-frame-count.js"
echo.
echo Done. Frames saved to %OUT%\
exit /b 0
