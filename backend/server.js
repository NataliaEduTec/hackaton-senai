import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import db, { testConnection } from './config/database.js';

// Importar rotas
import authRoutes from './routes/authRoutes.js';
import solicitacaoRoutes from './routes/solicitacaoRoutes.js';
import publicRoutes from './routes/publicRoutes.js';

// Configuração de variáveis de ambiente
dotenv.config();

// Obter __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (imagens de upload)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/solicitacoes', solicitacaoRoutes);
app.use('/api/public', publicRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 API do Sistema de Solicitações SENAI está rodando!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      solicitacoes: '/api/solicitacoes',
      public: '/api/public'
    }
  });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
const startServer = async () => {
  try {
    // Testar conexão com o banco de dados
    await testConnection();
    
    app.listen(PORT, () => {
      console.log(`\n✅ Servidor rodando na porta ${PORT}`);
      console.log(`📍 URL: http://localhost:${PORT}`);
      console.log(`📚 Ambiente: ${process.env.NODE_ENV || 'development'}\n`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();
