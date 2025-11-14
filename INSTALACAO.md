# 🚀 Guia Rápido de Instalação

## ⚡ Instalação Rápida (5 passos)

### 1️⃣ Instalar Pré-requisitos

**Node.js:**
- Download: https://nodejs.org/
- Versão recomendada: 18.x ou superior
- Verificar: `node --version`

**MySQL:**
- Download: https://dev.mysql.com/downloads/
- Versão recomendada: 8.0 ou superior
- Anotar senha do root durante instalação

### 2️⃣ Configurar Banco de Dados

Abra o MySQL Workbench ou MySQL Command Line:

```sql
-- Execute os arquivos nesta ordem:
SOURCE C:/Users/Natália/Desktop/hackathon-senai/database/01_schema.sql;
SOURCE C:/Users/Natália/Desktop/hackathon-senai/database/02_populate.sql;
```

Ou copie e cole o conteúdo de cada arquivo SQL.

### 3️⃣ Instalar Dependências

Abra PowerShell na pasta do projeto:

```powershell
cd C:\Users\Natália\Desktop\hackathon-senai

# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

### 4️⃣ Configurar Variáveis de Ambiente

O arquivo `backend/.env` já está configurado com:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=suport_senai
PORT=3001
```

**Se sua senha do MySQL for diferente**, edite o arquivo `.env` e altere `DB_PASSWORD=`.

### 5️⃣ Iniciar o Sistema

```powershell
.\start.ps1
```

Ou manualmente em dois terminais:

**Terminal 1 (Backend):**
```powershell
cd backend
npm start
```

**Terminal 2 (Frontend):**
```powershell
cd frontend
npm run dev
```

## ✅ Verificação

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Banco de dados: `suport_senai` deve existir no MySQL

## 🔑 Login Administrador

**Email:** joao.silva@senai.br  
**Senha:** senai2024

## ❓ Problemas Comuns

### Erro: "Cannot find module"
```powershell
cd backend
npm install
cd ../frontend
npm install
```

### Erro: "Port already in use"
```powershell
.\stop.ps1
.\start.ps1
```

### Erro de conexão MySQL
- Verifique se o MySQL está rodando
- Confira usuário/senha no arquivo `backend/.env`
- Certifique-se que o banco `suport_senai` foi criado

### Erro: "Access denied for user"
Edite `backend/.env` e ajuste:
```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

## 📞 Checklist Pré-Apresentação

- [ ] Node.js instalado
- [ ] MySQL instalado e rodando
- [ ] Banco de dados `suport_senai` criado
- [ ] Dependências instaladas (npm install)
- [ ] Sistema iniciado com sucesso
- [ ] Frontend acessível em http://localhost:3000
- [ ] Login admin funcionando
- [ ] Solicitação criada com sucesso

---

**Pronto!** Sistema funcionando! 🎉
