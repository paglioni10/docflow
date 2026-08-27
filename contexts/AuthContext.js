'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('docflow_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {}
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const mockUser = {
      id: 'user-001',
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      plan: 'pro',
      avatar: null,
    };
    setUser(mockUser);
    localStorage.setItem('docflow_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const register = (name, email, password) => {
    const mockUser = {
      id: 'user-001',
      name,
      email,
      plan: 'starter',
      avatar: null,
    };
    setUser(mockUser);
    localStorage.setItem('docflow_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('docflow_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
