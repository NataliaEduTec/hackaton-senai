import db from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Login de administrador
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Validação
    if (!email || !senha) {
      return res.status(400).json({ 
        success: false,
        message: 'Email e senha são obrigatórios.' 
      });
    }

    // Buscar usuário
    const [users] = await db.query(
      `SELECT ua.*, s.nome_setor 
       FROM usuarios_admin ua
       INNER JOIN setores s ON ua.id_setor_fk = s.id_setor
       WHERE ua.email_admin = ? AND ua.status_admin = 1`,
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ 
        success: false,
        message: 'Credenciais inválidas.' 
      });
    }

    const user = users[0];

    // Verificar senha
    const senhaValida = await bcrypt.compare(senha, user.senha_admin);

    if (!senhaValida) {
      return res.status(401).json({ 
        success: false,
        message: 'Credenciais inválidas.' 
      });
    }

    // Gerar token JWT
    const token = jwt.sign(
      {
        id: user.id_usuario_admin,
        email: user.email_admin,
        nome: user.nome_admin,
        cargo: user.cargo_admin,
        setor: user.nome_setor,
        id_setor: user.id_setor_fk
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      success: true,
      message: 'Login realizado com sucesso!',
      token,
      user: {
        id: user.id_usuario_admin,
        nome: user.nome_admin,
        email: user.email_admin,
        cargo: user.cargo_admin,
        setor: user.nome_setor
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erro ao realizar login.' 
    });
  }
};

// Verificar token (rota protegida de teste)
export const verificarToken = (req, res) => {
  res.json({
    success: true,
    message: 'Token válido!',
    user: req.user
  });
};
