# 🔐 Credenciais de Acesso

## 👤 Usuários Administradores

Todos os usuários admin possuem a **mesma senha**: `senai2024`

| Nome | Email | Setor | Cargo |
|------|-------|-------|-------|
| João Silva | joao.silva@senai.br | TI - Tecnologia da Informação | Coordenador de TI |
| Maria Santos | maria.santos@senai.br | Manutenção Predial | Supervisora de Manutenção |
| Carlos Oliveira | carlos.oliveira@senai.br | Manutenção de Equipamentos | Técnico de Equipamentos |
| Ana Costa | ana.costa@senai.br | Infraestrutura | Gerente de Infraestrutura |

## 🔑 Para Demonstração

**Recomendado para login:**
- **Email:** joao.silva@senai.br
- **Senha:** senai2024

## 📝 Solicitantes de Exemplo

Os seguintes solicitantes já possuem requisições cadastradas:

| Nome | Matrícula |
|------|-----------|
| Pedro Almeida | 2024001 |
| Juliana Ferreira | 2024002 |
| Roberto Mendes | 2024003 |
| Fernanda Lima | 2024004 |

**Para testar "Acompanhar Solicitações":** Use matrícula `2024001`

## 🔐 Hash de Senha

A senha `senai2024` está armazenada com hash bcrypt:
```
$2b$10$7we5U6Sgn5wZ/TVLirjeHergkkacgv8.Y1IzCZ0rl60UWmlKbmE1m
```

## 🛠️ Gerar Nova Senha

Para criar um novo usuário admin com senha diferente:

1. Execute o gerador de hash:
```powershell
cd backend
node utils/generateHash.js
```

2. Insira no banco de dados:
```sql
INSERT INTO usuarios_admin 
(id_setor_fk, nome_admin, email_admin, senha_admin, cargo_admin) 
VALUES 
(1, 'Novo Admin', 'novo@senai.br', 'HASH_GERADO_AQUI', 'Cargo');
```

## 📊 Banco de Dados

- **Database:** suport_senai
- **Host:** localhost
- **User:** root
- **Password:** (vazio por padrão)
- **Port:** 3306

## ⚠️ Importante

- Senhas são criptografadas com bcrypt (10 rounds)
- JWT expira em 8 horas
- Token armazenado em localStorage
- Não é necessário login para criar solicitações

---

**Dica:** Guarde este arquivo para referência rápida durante a apresentação!
