import React from 'react';
import { useSession } from './SessionProvider'; // Asegúrate de que la extensión sea .jsx
import Login from './Login';
import Home from './Home';

const App = () => {
  const { user } = useSession();
  

  return (
    <div>
      {user ? <Home /> : <Login />}
    </div>
  );
};

export default App;
