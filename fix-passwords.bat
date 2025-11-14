@echo off
echo Atualizando senhas no banco de dados...
echo.

REM Localizar o MySQL
set MYSQL_PATH=C:\xampp\mysql\bin\mysql.exe

if not exist "%MYSQL_PATH%" (
    set MYSQL_PATH=C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe
)

if not exist "%MYSQL_PATH%" (
    echo MySQL não encontrado!
    echo Por favor, execute manualmente:
    echo mysql -u root ^< database\fix_passwords.sql
    pause
    exit /b 1
)

REM Executar o script
"%MYSQL_PATH%" -u root < database\fix_passwords.sql

if %errorlevel% equ 0 (
    echo.
    echo ✓ Senhas atualizadas com sucesso!
) else (
    echo.
    echo ✗ Erro ao atualizar senhas
)

pause
