# ==========================================
# Script para Parar o Sistema SENAI
# ==========================================

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Parando Sistema SENAI" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Parar processos Node.js
Write-Host "Encerrando processos Node.js..." -ForegroundColor Yellow

$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    $nodeProcesses | ForEach-Object {
        try {
            Stop-Process -Id $_.Id -Force
            Write-Host "✓ Processo $($_.Id) encerrado" -ForegroundColor Green
        } catch {
            Write-Host "✗ Erro ao encerrar processo $($_.Id)" -ForegroundColor Red
        }
    }
} else {
    Write-Host "Nenhum processo Node.js encontrado" -ForegroundColor Yellow
}

Write-Host "`n✓ Sistema encerrado!`n" -ForegroundColor Green
