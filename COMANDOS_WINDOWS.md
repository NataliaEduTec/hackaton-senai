# 💻 Comandos Windows - Guia Rápido

## 🗂️ Navegação

```powershell
# Ver caminho atual
pwd

# Listar arquivos e pastas
dir

# Navegar para pasta
cd C:\Users\Natália\Desktop\hackathon-senai

# Voltar uma pasta
cd ..

# Visualizar estrutura de pastas
tree /F
```

## 📦 NPM - Gerenciamento de Pacotes

```powershell
# Instalar dependências
npm install

# Instalar dependência específica
npm install express

# Iniciar projeto
npm start

# Modo desenvolvimento (com watch)
npm run dev

# Limpar cache do npm
npm cache clean --force

# Ver versão do Node e npm
node --version
npm --version
```

## 🚀 Iniciar/Parar Sistema

```powershell
# Iniciar sistema completo
.\start.ps1

# Parar sistema
.\stop.ps1

# Iniciar apenas backend
cd backend
npm start

# Iniciar apenas frontend
cd frontend
npm run dev

# Parar processos Node manualmente
Get-Process -Name "node" | Stop-Process -Force
```

## 🗄️ MySQL

```powershell
# Entrar no MySQL (Command Line)
mysql -u root -p

# Executar arquivo SQL
mysql -u root -p < database/01_schema.sql

# Verificar se MySQL está rodando
Get-Service MySQL*

# Iniciar serviço MySQL
Start-Service MySQL80

# Parar serviço MySQL
Stop-Service MySQL80
```

### Comandos SQL Úteis

```sql
-- Ver bancos de dados
SHOW DATABASES;

-- Usar banco
USE suport_senai;

-- Ver tabelas
SHOW TABLES;

-- Ver estrutura de tabela
DESCRIBE solicitacoes;

-- Ver dados
SELECT * FROM solicitacoes;

-- Contar registros
SELECT COUNT(*) FROM solicitacoes;

-- Limpar tabela (cuidado!)
TRUNCATE TABLE solicitacoes;

-- Apagar banco (cuidado!)
DROP DATABASE suport_senai;
```

## 🔍 Verificação de Portas

```powershell
# Ver processos usando porta específica
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Ver todas as conexões TCP
Get-NetTCPConnection -LocalPort 3000,3001

# Matar processo por PID
Stop-Process -Id NUMERO_PID -Force
```

## 📝 Arquivos e Pastas

```powershell
# Criar pasta
mkdir nome_pasta

# Criar arquivo vazio
New-Item arquivo.txt

# Copiar arquivo
Copy-Item origem.txt destino.txt

# Mover arquivo
Move-Item arquivo.txt C:\destino\

# Deletar arquivo
Remove-Item arquivo.txt

# Deletar pasta com conteúdo
Remove-Item pasta -Recurse -Force

# Ver conteúdo de arquivo
Get-Content arquivo.txt

# Editar arquivo (abre no Notepad)
notepad arquivo.txt

# Abrir pasta no Explorer
explorer .
```

## 🌐 Navegador

```powershell
# Abrir URL no navegador padrão
start http://localhost:3000

# Abrir no Chrome
start chrome http://localhost:3000

# Abrir no Edge
start msedge http://localhost:3000
```

## 🔧 VS Code

```powershell
# Abrir VS Code na pasta atual
code .

# Abrir arquivo específico
code arquivo.js

# Instalar extensão
code --install-extension dbaeumer.vscode-eslint
```

## 🧹 Limpeza

```powershell
# Deletar node_modules (libera espaço)
Remove-Item -Path "node_modules" -Recurse -Force

# Deletar todos os node_modules do projeto
Get-ChildItem -Path . -Directory -Filter "node_modules" -Recurse | Remove-Item -Recurse -Force

# Limpar terminal
cls
```

## 📊 Informações do Sistema

```powershell
# Ver processos Node rodando
Get-Process -Name node

# Ver uso de memória
Get-Process node | Select-Object ProcessName, WorkingSet

# Ver informações do sistema
systeminfo

# Ver versão do Windows
winver
```

## 🔐 Permissões

```powershell
# Permitir execução de scripts PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Ver política atual
Get-ExecutionPolicy

# Executar script sem mudar política
powershell -ExecutionPolicy Bypass -File .\start.ps1
```

## 🌐 Rede

```powershell
# Ver IP local
ipconfig

# Testar conexão
ping localhost

# Ver conexões ativas
netstat -an

# Liberar/renovar IP
ipconfig /release
ipconfig /renew

# Limpar cache DNS
ipconfig /flushdns
```

## 📦 Git (Opcional)

```powershell
# Inicializar repositório
git init

# Ver status
git status

# Adicionar todos os arquivos
git add .

# Commit
git commit -m "Mensagem"

# Ver histórico
git log

# Criar branch
git branch nome-branch

# Mudar de branch
git checkout nome-branch

# Ver branches
git branch -a
```

## 🐛 Debug

```powershell
# Verificar se porta está em uso
Test-NetConnection -ComputerName localhost -Port 3000

# Ver logs de erro do Windows
Get-EventLog -LogName Application -Newest 10

# Executar Node com debug
node --inspect server.js

# Executar npm com logs detalhados
npm start --verbose
```

## 📋 Variáveis de Ambiente

```powershell
# Ver variáveis de ambiente
Get-ChildItem Env:

# Ver variável específica
$env:PATH

# Definir variável temporária
$env:NOME_VARIAVEL = "valor"

# Adicionar ao PATH temporariamente
$env:PATH += ";C:\novo\caminho"
```

## 🚨 Solução de Problemas Comuns

### Erro: "npm não é reconhecido"
```powershell
# Reinstalar Node.js ou adicionar ao PATH
$env:PATH += ";C:\Program Files\nodejs"
```

### Erro: "Porta já em uso"
```powershell
# Encontrar processo
netstat -ano | findstr :3000
# Matar processo (substituir PID)
taskkill /PID numero_pid /F
```

### Erro: "Access denied" no MySQL
```powershell
# Resetar senha do MySQL root
# (executar como Administrador)
net stop MySQL80
mysqld --skip-grant-tables
# Em outro terminal:
mysql -u root
# No MySQL:
ALTER USER 'root'@'localhost' IDENTIFIED BY 'nova_senha';
FLUSH PRIVILEGES;
```

### Erro: "node_modules não encontrado"
```powershell
npm install
```

### Sistema não inicia
```powershell
# Verificar se MySQL está rodando
Get-Service MySQL*

# Iniciar MySQL se necessário
Start-Service MySQL80

# Verificar portas
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Reinstalar dependências
cd backend
Remove-Item node_modules -Recurse -Force
npm install
cd ../frontend
Remove-Item node_modules -Recurse -Force
npm install
```

## ⚡ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl + C` | Parar processo no terminal |
| `Ctrl + L` | Limpar terminal |
| `Tab` | Autocompletar caminho/arquivo |
| `↑ / ↓` | Navegar histórico de comandos |
| `Ctrl + R` | Buscar no histórico |
| `F7` | Ver histórico de comandos |
| `Ctrl + Shift + C` | Copiar do terminal |
| `Ctrl + Shift + V` | Colar no terminal |

## 🎯 Comandos Específicos do Projeto

```powershell
# Setup completo do zero
cd C:\Users\Natália\Desktop\hackathon-senai
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# Executar SQL no MySQL
mysql -u root -p < database/01_schema.sql
mysql -u root -p < database/02_populate.sql

# Gerar hash de senha
cd backend
node utils/generateHash.js

# Build de produção
cd frontend
npm run build

# Testar API
curl http://localhost:3001

# Ver logs em tempo real (backend)
cd backend
npm start

# Modo watch (auto-reload)
cd backend
npm run dev
```

## 📚 Links Úteis

- Node.js: https://nodejs.org/
- MySQL: https://dev.mysql.com/downloads/
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- Postman: https://www.postman.com/

---

**Dica:** Salve este arquivo para referência rápida durante o desenvolvimento!
