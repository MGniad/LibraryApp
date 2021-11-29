import React, { useState } from "react";
import logo from "../img/user.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed To log out");
    }
  }

  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="info">
          <p>{currentUser.email}</p>
          <a onClick={handleLogout}>Logout!</a>
        </div>
      </div>
    </div>
  );
}

export default User;
