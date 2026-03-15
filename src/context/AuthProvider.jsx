import { useState } from "react";
import { AuthContext } from "./Authcontext";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth === "true";
  });

  function login() {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  }
  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
