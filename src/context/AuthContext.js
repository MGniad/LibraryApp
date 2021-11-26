import React, { useContext, useState, useEffect } from "react";
import { auth, signup, login } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function register(email, password) {
    return signup(email, password);
  }

  function access(email, password) {
    return login(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    access,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
