import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

function NovaSolicitacao() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [formData, setFormData] = useState({
    nome_solicitante: '',
    matricula_solicitante: '',
    cargo_solicitante: '',
    local_problema: '',
    descricao_problema: '',
    id_categoria: '',
    prioridade: 'Média',
    imagem: null
  });

  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    try {
      const response = await api.get('/public/categorias');
      setCategorias(response.data.categorias);
    } catch (error) {
      toast.error('Erro ao carregar categorias');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, imagem: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await api.post('/solicitacoes', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Solicitação criada com sucesso!');
      navigate('/solicitante');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Erro ao criar solicitação');
    }
  };

  return (
    <div className="solicitante-container">
      <div className="container">
        <button className="btn btn-outline" onClick={() => navigate('/solicitante')}>
          ← Voltar
        </button>
        
        <div className="card" style={{ marginTop: '20px', maxWidth: '800px', margin: '20px auto' }}>
          <h2 style={{ marginBottom: '30px', color: 'var(--secondary-color)' }}>Nova Solicitação</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome Completo *</label>
              <input type="text" name="nome_solicitante" value={formData.nome_solicitante} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Matrícula *</label>
              <input type="text" name="matricula_solicitante" value={formData.matricula_solicitante} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Cargo *</label>
              <input type="text" name="cargo_solicitante" value={formData.cargo_solicitante} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Local do Problema *</label>
              <input type="text" name="local_problema" value={formData.local_problema} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Categoria *</label>
              <select name="id_categoria" value={formData.id_categoria} onChange={handleChange} required>
                <option value="">Selecione...</option>
                {categorias.map(cat => (
                  <option key={cat.id_categoria} value={cat.id_categoria}>
                    {cat.nome_categoria} - {cat.nome_setor}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Prioridade *</label>
              <select name="prioridade" value={formData.prioridade} onChange={handleChange} required>
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>

            <div className="form-group">
              <label>Descrição do Problema *</label>
              <textarea name="descricao_problema" value={formData.descricao_problema} onChange={handleChange} rows="5" required />
            </div>

            <div className="form-group">
              <label>Imagem (opcional)</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NovaSolicitacao;
