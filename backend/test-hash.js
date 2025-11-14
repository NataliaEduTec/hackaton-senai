import bcrypt from 'bcrypt';

// Gerar hash para senai2024
const hash = await bcrypt.hash('senai2024', 10);
console.log('Hash gerado:', hash);

// Testar o hash
const result = await bcrypt.compare('senai2024', hash);
console.log('Teste do hash:', result);
