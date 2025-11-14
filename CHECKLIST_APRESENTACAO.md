# ✅ Checklist Pré-Apresentação - Hackathon SENAI

## 📅 Informações Importantes

**Data limite:** 14/11/2025 às 21:00  
**Duração:** 3 minutos  
**Local do projeto:** `C:\Users\Natália\Desktop\hackathon-senai`

---

## 🔧 CONFIGURAÇÃO INICIAL (Fazer 1 dia antes)

### 1. Verificar Instalações

- [ ] **Node.js instalado**
  ```powershell
  node --version
  # Deve mostrar: v18.x.x ou superior
  ```

- [ ] **NPM funcionando**
  ```powershell
  npm --version
  # Deve mostrar: 9.x.x ou superior
  ```

- [ ] **MySQL instalado e rodando**
  ```powershell
  Get-Service MySQL*
  # Status deve ser: Running
  ```

### 2. Instalar Dependências

- [ ] **Backend**
  ```powershell
  cd C:\Users\Natália\Desktop\hackathon-senai\backend
  npm install
  # Aguardar conclusão sem erros
  ```

- [ ] **Frontend**
  ```powershell
  cd C:\Users\Natália\Desktop\hackathon-senai\frontend
  npm install
  # Aguardar conclusão sem erros
  ```

### 3. Configurar Banco de Dados

- [ ] **Executar schema**
  ```sql
  -- No MySQL Workbench ou Command Line:
  SOURCE C:/Users/Natália/Desktop/hackathon-senai/database/01_schema.sql;
  ```

- [ ] **Executar população**
  ```sql
  SOURCE C:/Users/Natália/Desktop/hackathon-senai/database/02_populate.sql;
  ```

- [ ] **Verificar criação**
  ```sql
  USE suport_senai;
  SHOW TABLES;
  -- Deve mostrar 5 tabelas
  ```

### 4. Testar Sistema

- [ ] **Iniciar sistema**
  ```powershell
  cd C:\Users\Natália\Desktop\hackathon-senai
  .\start.ps1
  ```

- [ ] **Verificar backend**
  - Abrir: http://localhost:3001
  - Deve mostrar mensagem JSON de boas-vindas

- [ ] **Verificar frontend**
  - Abrir: http://localhost:3000
  - Deve mostrar página inicial com 2 perfis

- [ ] **Testar login admin**
  - Email: joao.silva@senai.br
  - Senha: senai2024
  - Deve entrar no dashboard

- [ ] **Testar criar solicitação**
  - Ir em "Solicitante" → "Nova Solicitação"
  - Preencher e enviar
  - Deve mostrar mensagem de sucesso

- [ ] **Parar sistema**
  ```powershell
  .\stop.ps1
  ```

---

## 🎬 NO DIA DA APRESENTAÇÃO (2 horas antes)

### 1. Preparação do Ambiente

- [ ] **Fechar todos os programas desnecessários**
  - Fechar Chrome/Edge (abas antigas)
  - Fechar WhatsApp/Discord/Slack
  - Fechar Spotify/Music
  - Manter apenas: VS Code, MySQL, PowerShell

- [ ] **Limpar área de trabalho**
  - Organizar ícones
  - Wallpaper profissional
  - Barra de tarefas limpa

- [ ] **Configurar tela**
  - Resolução adequada
  - Brilho suficiente
  - Modo apresentação (desativar notificações)

### 2. Iniciar Sistema

- [ ] **MySQL rodando**
  ```powershell
  Get-Service MySQL*
  # Se não: Start-Service MySQL80
  ```

- [ ] **Iniciar aplicação**
  ```powershell
  cd C:\Users\Natália\Desktop\hackathon-senai
  .\start.ps1
  ```

- [ ] **Aguardar inicialização** (30-60 segundos)

- [ ] **Verificar acessos**
  - [ ] http://localhost:3000 carregando
  - [ ] http://localhost:3001 respondendo

### 3. Preparar Navegador

- [ ] **Abrir Chrome/Edge**

- [ ] **Criar abas necessárias:**
  1. http://localhost:3000 (Home)
  2. Bloco de notas com credenciais (backup)

- [ ] **Fechar todas as outras abas**

- [ ] **Configurar zoom: 100%** (Ctrl + 0)

- [ ] **Modo tela cheia** (F11) - testar e sair

- [ ] **Limpar histórico de autocompletar** (se necessário)

### 4. Preparar Dados de Teste

- [ ] **Criar arquivo de texto** com:
  ```
  CREDENCIAIS ADMIN:
  Email: joao.silva@senai.br
  Senha: senai2024

  DADOS NOVA SOLICITAÇÃO:
  Nome: João da Silva
  Matrícula: 2024999
  Cargo: Instrutor
  Local: Sala 205
  Categoria: Hardware
  Prioridade: Urgente
  Descrição: Computador não liga

  MATRÍCULA PARA BUSCA:
  2024001
  ```

- [ ] **Deixar arquivo aberto** em segundo plano

### 5. Preparar Timer

- [ ] **Timer online ou celular**
  - Configurar para 3 minutos
  - Testar funcionamento
  - Deixar visível mas discreto

### 6. Verificação Final (15 min antes)

- [ ] **Testar fluxo completo:**

  1. [ ] Home carregando
  2. [ ] Clicar em "Solicitante"
  3. [ ] "Nova Solicitação"
  4. [ ] Preencher formulário (copiar dados do txt)
  5. [ ] Enviar solicitação
  6. [ ] Voltar e ir em "Acompanhar"
  7. [ ] Buscar por matrícula 2024001
  8. [ ] Visualizar resultados
  9. [ ] Voltar à Home
  10. [ ] Clicar em "Administrador"
  11. [ ] Login (joao.silva@senai.br / senai2024)
  12. [ ] Visualizar dashboard
  13. [ ] Testar filtros
  14. [ ] Atualizar uma solicitação
  15. [ ] Logout

- [ ] **Se tudo OK:** Sistema pronto! ✅

---

## 🎤 DURANTE A APRESENTAÇÃO

### Checklist Rápido

- [ ] **Sistema rodando**
- [ ] **Timer iniciado**
- [ ] **Navegador em tela cheia** (F11)
- [ ] **Dados de teste prontos**
- [ ] **Respirar fundo e começar**

### Estrutura dos 3 Minutos

**00:00-00:30** - Introdução
- [ ] Apresentar problema
- [ ] Mostrar solução
- [ ] Apresentar tela inicial

**00:30-01:30** - Demo Solicitante
- [ ] Criar nova solicitação
- [ ] Mostrar acompanhamento

**01:30-02:30** - Demo Admin
- [ ] Login
- [ ] Dashboard e gráficos
- [ ] Filtros
- [ ] Atualizar solicitação

**02:30-03:00** - Conclusão
- [ ] Tecnologias
- [ ] Funcionalidades
- [ ] Encerramento

### Frases-Chave Preparadas

**Abertura:**
> "Bom dia/tarde! Desenvolvemos um sistema completo de gestão de solicitações de manutenção para o SENAI..."

**Demonstração:**
> "Vou mostrar como funciona na prática..."

**Tecnologias:**
> "Utilizamos Node.js, React 18 e MySQL com autenticação JWT..."

**Encerramento:**
> "O sistema está 100% funcional e pronto para uso! Obrigado!"

---

## 🐛 PLANO B - Problemas Durante Apresentação

### Se o sistema travar:

- [ ] **Atualizar página** (F5)
- [ ] **Enquanto carrega, falar:**
  > "Enquanto recarrega, vou explicar a arquitetura do sistema..."

### Se esquecer credenciais:

- [ ] **Alt+Tab** para bloco de notas
- [ ] **Copiar** credenciais
- [ ] **Voltar** ao navegador

### Se faltar tempo:

- [ ] **Priorizar:**
  - Criar solicitação
  - Login admin
  - Dashboard básico
- [ ] **Pular:**
  - Filtros detalhados
  - Todas as funcionalidades

### Se sobrar tempo:

- [ ] **Mostrar código** (opcional)
- [ ] **Explicar segurança**
- [ ] **Demonstrar responsividade**

### Se der erro crítico:

- [ ] **Manter calma**
- [ ] **Explicar o que deveria acontecer**
- [ ] **Mencionar que funcionou em testes**
- [ ] **Focar nas tecnologias e arquitetura**

---

## 📱 CONTATOS DE EMERGÊNCIA

### Suporte Técnico

- **Instrutor:** [Nome e contato]
- **Colega:** [Nome e contato]
- **TI do SENAI:** [Contato se disponível]

### Links Úteis

- Documentação Node.js: https://nodejs.org/docs
- Documentação React: https://react.dev
- Stack Overflow: https://stackoverflow.com

---

## 📊 APÓS A APRESENTAÇÃO

### Checklist Pós-Apresentação

- [ ] **Exportar código**
  ```powershell
  # Se solicitado
  Compress-Archive -Path C:\Users\Natália\Desktop\hackathon-senai -DestinationPath hackathon-senai.zip
  ```

- [ ] **Backup do banco**
  ```powershell
  mysqldump -u root -p suport_senai > backup_apresentacao.sql
  ```

- [ ] **Screenshot/vídeo** (se permitido)

- [ ] **Anotar feedback** recebido

- [ ] **Agradecer** aos avaliadores

---

## 🎯 CRITÉRIOS DE AVALIAÇÃO (Lembrar)

Prováveis critérios que serão avaliados:

- [ ] **Funcionalidade** - Sistema funciona completamente?
- [ ] **Código** - Organizado e com boas práticas?
- [ ] **Interface** - Intuitiva e profissional?
- [ ] **Tecnologias** - Uso adequado das ferramentas?
- [ ] **Segurança** - Implementada corretamente?
- [ ] **Apresentação** - Clara e dentro do tempo?
- [ ] **Documentação** - Completa e útil?
- [ ] **Inovação** - Soluções criativas?

---

## ⏰ CRONOGRAMA DIA DA APRESENTAÇÃO

**4 horas antes:**
- [ ] Verificar sistema completo
- [ ] Testar fluxo inteiro 2x

**2 horas antes:**
- [ ] Preparar ambiente
- [ ] Iniciar sistema
- [ ] Preparar materiais

**30 minutos antes:**
- [ ] Verificação final
- [ ] Teste rápido
- [ ] Respirar fundo

**15 minutos antes:**
- [ ] Já estar preparado
- [ ] Timer pronto
- [ ] Mentalizar apresentação

**NA HORA:**
- [ ] Confiança
- [ ] Começar timer
- [ ] Apresentar!

---

## 🏆 MENSAGEM MOTIVACIONAL

**Você preparou um sistema completo e funcional!**

- ✅ 43 arquivos criados
- ✅ Backend robusto
- ✅ Frontend profissional
- ✅ Banco de dados estruturado
- ✅ Documentação completa
- ✅ Sistema testado

**Você está pronto! Boa sorte! 🚀**

---

## 📞 SUPORTE ÚLTIMA HORA

Se algo der muito errado **antes** da apresentação:

1. **Verificar este arquivo**
2. **Consultar INSTALACAO.md**
3. **Ler COMANDOS_WINDOWS.md**
4. **Verificar CREDENCIAIS.md**

**Telefone de emergência:** [Seu contato]

---

**Última atualização:** 14/11/2025  
**Status:** ✅ PRONTO PARA APRESENTAR  
**Confiança:** 🟢🟢🟢🟢🟢

**VOCÊ CONSEGUE! 💪**
