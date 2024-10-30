import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        credentials: "include", // Esto es importante para enviar las cookies de sesión
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: credentials.username, 
          password: credentials.password,
        }),
      });
      const data = await response.json();
  
      if (response.ok) {
    // almacenar la información del usuario en el contexto
      setUser(data.user.username);
      } else {
        throw new Error(data.message || 'Error en la autenticación');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const logout = () => {
    setUser(null);  // Limpiar los datos del usuario
  };

  return (
    <SessionContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
