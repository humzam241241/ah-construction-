@echo off
title A.H Construction — Dev Server
cd /d "%~dp0"

echo.
echo  ================================================
echo   A.H Construction — Next.js Dev Server
echo  ================================================
echo.

:: Kill anything on port 3000
echo  [1/4] Clearing port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000 " 2^>nul') do (
    taskkill /f /pid %%a >nul 2>&1
)

:: Delete old .next build cache
echo  [2/4] Clearing build cache...
if exist ".next" rmdir /s /q ".next" 2>nul

:: Tell OneDrive to not sync .next folder (Windows 10/11)
echo  [3/4] Excluding .next from OneDrive sync...
if not exist ".next" mkdir ".next"
attrib +U -P ".next" >nul 2>&1

:: Start dev server
echo  [4/4] Starting Next.js...
echo.
echo   URL: http://localhost:3000
echo.
echo  ================================================
echo.

npm run dev

echo.
echo  ================================================
echo   SERVER STOPPED (exit code: %ERRORLEVEL%)
echo   Scroll up to see any errors.
echo  ================================================
cmd /k
