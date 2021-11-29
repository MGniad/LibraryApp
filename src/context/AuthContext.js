import React, { useContext, useState, useEffect } from "react";
import { auth, signup, login, reset } from "../firebase";

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

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return reset(email);
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
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
