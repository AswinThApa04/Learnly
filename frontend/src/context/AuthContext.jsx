import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Mock login function
  const login = (userData) => {
    // In a real app, you'd make an API call. Here, we'll just set the user.
    const mockUser = { id: '123', name: userData.name || 'Valued Learner', email: userData.email };
    setUser(mockUser);
    // Redirect to the dashboard after login
    navigate('/dashboard');
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // Redirect to the home page after logout
    navigate('/');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};