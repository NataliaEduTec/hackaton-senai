import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';

// Páginas
import Home from './pages/Home/Home';
import SolicitanteMenu from './pages/Solicitante/SolicitanteMenu';
import NovaSolicitacao from './pages/Solicitante/NovaSolicitacao';
import AcompanharSolicitacoes from './pages/Solicitante/AcompanharSolicitacoes';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solicitante" element={<SolicitanteMenu />} />
            <Route path="/solicitante/nova" element={<NovaSolicitacao />} />
            <Route path="/solicitante/acompanhar" element={<AcompanharSolicitacoes />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
