@echo off
title Photo Color Studio Pro Launcher
echo ===================================================
echo   Photo Color Studio Pro Launcher
echo ===================================================
echo.
echo [1/3] Kiem tra Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [Loi] Node.js chua duoc cai dat tren may tinh cua ban!
    echo Vui long tai va cai dat Node.js tai: https://nodejs.org/
    echo Sau do hay mo lai file start_app.bat nay.
    echo.
    pause
    exit /b
)
echo Node.js da duoc tim thay.
echo.
echo [2/3] Dang cai dat cac thu vien dependency (npm install)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [Loi] Khong the cai dat cac thu vien. Vui long kiem tra ket noi mang.
    echo.
    pause
    exit /b
)
echo.
echo [3/3] Dang tao Prisma Client locally...
call npx prisma generate
echo.
echo ===================================================
echo   Khoi dong local server tai http://localhost:3000
echo ===================================================
echo.
echo Trinh duyet se tu dong mo trang ung dung sau vai giay.
echo.
start http://localhost:3000
call npm run dev
pause
