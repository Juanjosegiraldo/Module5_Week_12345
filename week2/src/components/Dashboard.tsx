import { Navigate, useNavigate } from 'react-router-dom';

const AUTH_KEY = 'week2-user';

export default function Dashboard() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem(AUTH_KEY);

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{ padding: 24, maxWidth: 480, color: '#e7e9ea' }}>
      <h1 style={{ marginTop: 0, fontSize: '1.75rem' }}>Panel</h1>
      <p style={{ lineHeight: 1.5 }}>
        Bienvenido, <strong>{username}</strong>. Inicio de sesión correcto.
      </p>
      <button
        type="button"
        onClick={() => {
          sessionStorage.removeItem(AUTH_KEY);
          navigate('/', { replace: true });
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
