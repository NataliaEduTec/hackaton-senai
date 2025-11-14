import express from 'express';
import {
  criarSolicitacao,
  buscarPorMatricula,
  listarTodas,
  buscarPorId,
  atualizarStatus,
  filtrarSolicitacoes,
  obterEstatisticas
} from '../controllers/solicitacaoController.js';
import { authenticateToken } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Rotas públicas (não requerem autenticação)
router.post('/', upload.single('imagem'), criarSolicitacao);
router.get('/matricula/:matricula', buscarPorMatricula);

// Rotas protegidas (requerem autenticação de admin)
router.get('/', authenticateToken, listarTodas);
router.get('/filtrar', authenticateToken, filtrarSolicitacoes);
router.get('/estatisticas', authenticateToken, obterEstatisticas);
router.get('/:id', authenticateToken, buscarPorId);
router.put('/:id', authenticateToken, atualizarStatus);

export default router;
