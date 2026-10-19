import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('app-user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error('Ошибка чтения сессии из localStorage:', error);
      return null;
    }
  });

  const login = (email) => {
    const userData = { email, name: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('app-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);