import React from 'react';
import { useSession } from './SessionProvider';
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
