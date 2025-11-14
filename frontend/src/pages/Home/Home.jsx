import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Sistema de Solicitações SENAI</h1>
        <p>Gestão de Manutenção e Suporte Técnico</p>
      </div>

      <div className="profile-selection">
        <div className="profile-card" onClick={() => navigate('/solicitante')}>
          <div className="profile-icon">👤</div>
          <h2>Solicitante</h2>
          <p>Registre solicitações de manutenção e suporte técnico e acompanhe seu status</p>
          <button className="btn btn-primary">Acessar</button>
        </div>

        <div className="profile-card" onClick={() => navigate('/admin/login')}>
          <div className="profile-icon">🔧</div>
          <h2>Administrador</h2>
          <p>Gerencie todas as solicitações, atribua responsáveis e acompanhe estatísticas</p>
          <button className="btn btn-secondary">Login Admin</button>
        </div>
      </div>

      <div className="home-footer">
        <p>© 2025 SENAI - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Home;
