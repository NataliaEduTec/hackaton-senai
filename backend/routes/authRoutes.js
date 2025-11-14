import express from 'express';
import { login, verificarToken } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

// POST /api/auth/login - Login de administrador
router.post('/login', login);

// GET /api/auth/verificar - Verificar token (rota protegida)
router.get('/verificar', authenticateToken, verificarToken);

export default router;
