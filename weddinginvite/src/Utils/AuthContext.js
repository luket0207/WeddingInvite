import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );

  const login = (password) => {
    if (password === "kanda" || password === "Kanda") {
      setAuthenticated(true);
      localStorage.setItem("authenticated", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
