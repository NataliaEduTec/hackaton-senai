import db from '../config/database.js';

// Listar categorias
export const listarCategorias = async (req, res) => {
  try {
    const [categorias] = await db.query(
      `SELECT c.*, s.nome_setor
       FROM categorias_solicitacao c
       INNER JOIN setores s ON c.id_setor_fk = s.id_setor
       WHERE c.status_categoria = 1
       ORDER BY c.nome_categoria`
    );

    res.json({
      success: true,
      categorias
    });

  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar categorias.'
    });
  }
};

// Listar setores
export const listarSetores = async (req, res) => {
  try {
    const [setores] = await db.query(
      `SELECT * FROM setores
       WHERE status_setor = 1
       ORDER BY nome_setor`
    );

    res.json({
      success: true,
      setores
    });

  } catch (error) {
    console.error('Erro ao listar setores:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar setores.'
    });
  }
};
