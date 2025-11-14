import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return user ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
