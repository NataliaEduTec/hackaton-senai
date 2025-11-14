import bcrypt from 'bcrypt';

// Função para gerar hash de senha
const generateHash = async (senha) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(senha, salt);
    console.log(`\nSenha: ${senha}`);
    console.log(`Hash: ${hash}\n`);
    return hash;
  } catch (error) {
    console.error('Erro ao gerar hash:', error);
  }
};

// Exemplo de uso
generateHash('senai2024');
