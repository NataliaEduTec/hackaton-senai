import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Acesso negado. Token não fornecido.' 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adicionar informações do usuário à requisição
    next();
  } catch (error) {
    return res.status(403).json({ 
      success: false,
      message: 'Token inválido ou expirado.' 
    });
  }
};
