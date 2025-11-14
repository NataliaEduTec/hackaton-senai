import { useNavigate } from 'react-router-dom';
import './SolicitanteMenu.css';

function SolicitanteMenu() {
  const navigate = useNavigate();

  return (
    <div className="solicitante-container">
      <div className="solicitante-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Voltar
        </button>
        <h1>Área do Solicitante</h1>
        <p>Escolha uma opção abaixo</p>
      </div>

      <div className="menu-options">
        <div className="menu-card" onClick={() => navigate('/solicitante/nova')}>
          <div className="menu-icon">➕</div>
          <h2>Nova Solicitação</h2>
          <p>Registre uma nova solicitação de manutenção ou suporte</p>
        </div>

        <div className="menu-card" onClick={() => navigate('/solicitante/acompanhar')}>
          <div className="menu-icon">📋</div>
          <h2>Acompanhar Solicitações</h2>
          <p>Consulte o status das suas solicitações</p>
        </div>
      </div>
    </div>
  );
}

export default SolicitanteMenu;
