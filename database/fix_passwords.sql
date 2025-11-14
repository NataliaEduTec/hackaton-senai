-- Atualizar senhas dos usuários admin
USE suport_senai;

-- Desabilitar temporariamente o safe mode
SET SQL_SAFE_UPDATES = 0;

-- Atualizar todos os usuários admin
UPDATE usuarios_admin 
SET senha_admin = '$2b$10$7we5U6Sgn5wZ/TVLirjeHergkkacgv8.Y1IzCZ0rl60UWmlKbmE1m';

-- Reabilitar o safe mode
SET SQL_SAFE_UPDATES = 1;

-- Verificar atualização
SELECT email_admin, LEFT(senha_admin, 20) as senha_hash FROM usuarios_admin;
