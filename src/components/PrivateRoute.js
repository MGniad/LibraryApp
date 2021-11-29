import React, { Component } from "react";
import { Navigate, Outlet, Route } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/Login" />;
}
