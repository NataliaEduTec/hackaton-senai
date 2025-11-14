import express from 'express';
import { listarCategorias, listarSetores } from '../controllers/categoriaController.js';

const router = express.Router();

// GET /api/public/categorias - Listar categorias (público)
router.get('/categorias', listarCategorias);

// GET /api/public/setores - Listar setores (público)
router.get('/setores', listarSetores);

export default router;
