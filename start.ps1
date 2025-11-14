# ==========================================
# Script de Inicialização do Sistema SENAI
# ==========================================

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Sistema de Solicitações SENAI" -ForegroundColor Cyan
Write-Host "  Script de Inicialização" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Verificar se Node.js está instalado
Write-Host "Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js não encontrado!" -ForegroundColor Red
    Write-Host "  Instale em: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit
}

# Verificar se as dependências estão instaladas
Write-Host "`nVerificando dependências..." -ForegroundColor Yellow

if (-not (Test-Path "backend\node_modules")) {
    Write-Host "Instalando dependências do Backend..." -ForegroundColor Yellow
    cd backend
    npm install
    cd ..
}

if (-not (Test-Path "frontend\node_modules")) {
    Write-Host "Instalando dependências do Frontend..." -ForegroundColor Yellow
    cd frontend
    npm install
    cd ..
}

Write-Host "✓ Dependências OK" -ForegroundColor Green

# Verificar se as portas estão disponíveis
Write-Host "`nVerificando portas..." -ForegroundColor Yellow

$port3001 = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
if ($port3001) {
    Write-Host "⚠ Porta 3001 em uso!" -ForegroundColor Yellow
    Write-Host "  Execute: .\stop.ps1 para liberar" -ForegroundColor Yellow
}

$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "⚠ Porta 3000 em uso!" -ForegroundColor Yellow
    Write-Host "  Execute: .\stop.ps1 para liberar" -ForegroundColor Yellow
}

# Iniciar Backend
Write-Host "`nIniciando Backend (porta 3001)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host 'Backend SENAI' -ForegroundColor Cyan; npm start"
Start-Sleep -Seconds 3

# Iniciar Frontend
Write-Host "Iniciando Frontend (porta 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; Write-Host 'Frontend SENAI' -ForegroundColor Cyan; npm run dev"
Start-Sleep -Seconds 2

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "  ✓ Sistema iniciado com sucesso!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "`nAcesse: http://localhost:3000" -ForegroundColor Cyan
Write-Host "API: http://localhost:3001`n" -ForegroundColor Cyan

Write-Host "Para parar o sistema, execute: .\stop.ps1`n" -ForegroundColor Yellow
