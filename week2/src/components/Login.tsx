import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../utils/auth';

const AUTH_KEY = 'week2-user';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (authenticate(username, password)) {
      setMsg('¡Éxito! Redirigiendo...');
      sessionStorage.setItem(AUTH_KEY, username);
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 1500);
    } else {
      setMsg('Error: Credenciales incorrectas');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Login Modular</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Usuario" 
          onChange={(e) => setUsername(e.target.value)} 
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.value)} 
        /><br/><br/>
        <button type="submit">Entrar</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default Login;