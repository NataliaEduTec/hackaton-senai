# 🎤 Roteiro de Apresentação (3 minutos)

## ⏱️ Cronometragem

- **00:00 - 00:30** → Introdução do Problema
- **00:30 - 01:30** → Demonstração (Solicitante)
- **01:30 - 02:30** → Demonstração (Administrador)
- **02:30 - 03:00** → Tecnologias e Conclusão

---

## 📋 Roteiro Detalhado

### 🎯 INTRODUÇÃO (30 segundos)

**Dizer:**
> "Bom dia/tarde! Nosso projeto é um **Sistema de Gestão de Solicitações** para o SENAI. O problema que identificamos é a dificuldade em gerenciar requisições de manutenção e suporte técnico de forma organizada.
>
> Nossa solução oferece **dois perfis**: Solicitante, que não precisa de login, e Administrador, com autenticação JWT."

**Ação:** Mostrar tela inicial (Home)

---

### 👤 DEMONSTRAÇÃO - SOLICITANTE (1 minuto)

**Dizer:**
> "Vou demonstrar como um colaborador cria uma solicitação:"

**Ações (em sequência rápida):**

1. **Clicar em "Solicitante"**
   - Mostrar menu com 2 opções

2. **Clicar em "Nova Solicitação"**
   - Preencher formulário rapidamente:
     - Nome: "João da Silva"
     - Matrícula: "2024999"
     - Cargo: "Instrutor"
     - Local: "Sala 205"
     - Categoria: "Hardware"
     - Prioridade: "Urgente"
     - Descrição: "Computador não liga"
   - **Clicar em "Enviar"**

3. **Mostrar notificação de sucesso**

4. **Voltar e clicar em "Acompanhar Solicitações"**
   - Digitar matrícula: "2024001"
   - Mostrar solicitações existentes com status

**Dizer:**
> "Veja que o solicitante pode acompanhar suas requisições apenas com a matrícula, sem necessidade de criar conta."

---

### 🔧 DEMONSTRAÇÃO - ADMINISTRADOR (1 minuto)

**Dizer:**
> "Agora vou mostrar a área administrativa:"

**Ações:**

1. **Voltar à Home e clicar em "Administrador"**

2. **Fazer login:**
   - Email: joao.silva@senai.br
   - Senha: senai2024

3. **Mostrar Dashboard (10-15 segundos):**
   - Apontar para estatísticas
   - Mostrar gráfico de pizza (status)
   - Mostrar gráfico de barras (prioridades)

**Dizer:**
> "O dashboard exibe estatísticas em tempo real com gráficos interativos."

4. **Rolar até filtros:**
   - Selecionar filtro rápido (ex: Status "Aberta")
   - Clicar "Aplicar Filtros"

5. **Mostrar tabela filtrada**

6. **Clicar em "Atualizar" em uma solicitação:**
   - Alterar status para "Em andamento"
   - Adicionar resposta: "Técnico direcionado ao local"
   - Salvar

7. **Mostrar notificação de sucesso**

**Dizer:**
> "O admin pode atualizar status e adicionar respostas que ficam visíveis para o solicitante."

---

### 💻 TECNOLOGIAS E CONCLUSÃO (30 segundos)

**Dizer:**
> "Tecnologias utilizadas:
> - **Backend**: Node.js com Express, autenticação JWT e bcrypt
> - **Frontend**: React 18 com Vite, Chart.js para gráficos
> - **Banco**: MySQL com 5 tabelas relacionadas
>
> Principais funcionalidades entregues:
> ✅ Sistema completo sem necessidade de login para solicitantes
> ✅ Dashboard administrativo com gráficos e filtros avançados
> ✅ Upload de imagens
> ✅ Histórico de movimentações
> ✅ Totalmente responsivo
>
> Obrigado!"

**Ação:** Voltar para a Home ou mostrar arquitetura (se houver tempo)

---

## 🎬 ANTES DE COMEÇAR

### Checklist Pré-Apresentação

- [ ] Sistema iniciado (`.\start.ps1`)
- [ ] Frontend aberto em http://localhost:3000
- [ ] Navegador em tela cheia (F11)
- [ ] Fechar abas desnecessárias
- [ ] Zoom do navegador em 100%
- [ ] Timer de 3 minutos pronto
- [ ] Credenciais anotadas (joao.silva@senai.br / senai2024)

### Preparação da Tela

1. **Aba 1:** http://localhost:3000 (Home)
2. **Aba 2:** Bloco de notas com credenciais (backup)
3. Fechar tudo mais

### Dados para Formulário (copiar antes)

```
Nome: João da Silva
Matrícula: 2024999
Cargo: Instrutor
Local: Sala 205
Categoria: Hardware
Prioridade: Urgente
Descrição: Computador não liga
```

---

## ⚠️ PLANO B - Se algo der errado

### Se o sistema travar:
> "Enquanto o sistema recarrega, vou explicar a arquitetura..."

### Se esquecer credenciais:
> Arquivo CREDENCIAIS.md aberto em segundo plano

### Se faltar tempo:
- Priorizar: Criar solicitação + Login admin + Dashboard
- Pular: Filtros detalhados

### Se sobrar tempo:
- Mostrar código (server.js ou AdminDashboard.jsx)
- Explicar segurança (JWT, bcrypt, SQL injection prevention)

---

## 📸 Screenshots Recomendados (se permitido)

1. Home (perfis)
2. Formulário de nova solicitação
3. Dashboard com gráficos
4. Modal de atualização

---

## 🎯 Mensagem Final

**Encerramento impactante:**
> "Este sistema reduz significativamente o tempo de gestão de solicitações, oferece transparência total para solicitantes e fornece aos gestores dados visuais para tomada de decisão. Está pronto para uso imediato no SENAI!"

---

**Boa sorte! 🚀**

**Data limite:** 14/11/2025 às 21:00
