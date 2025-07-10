@echo off
cd /d "%~dp0"

echo [步驟 1] 切換到目前目錄

echo [步驟 2] 初始化 package.json
call node-v22.17.0-win-x64\npm.cmd init -y

echo [步驟 3] 安裝 express 模組
call node-v22.17.0-win-x64\npm.cmd install express

echo [完成] 所有步驟執行完畢！
pause