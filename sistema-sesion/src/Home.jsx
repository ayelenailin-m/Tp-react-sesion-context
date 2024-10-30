import React from 'react';
import { useSession } from './SessionProvider';

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div>
      <h2>Bienvenido, {user ? user: 'Usuario'}</h2>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
