import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
  
      if (response.ok) {
        setUser(data.user.username);
      } else {
        throw new Error(data.message || 'Error en la autenticación');
      }
    } catch (error) {
      setError(error.message);  
    } finally {
      setLoading(false);
    }
  };
  

  const logout = () => {
    setUser(null);  // Limpiar los datos del usuario
  };

  return (
    <SessionContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
