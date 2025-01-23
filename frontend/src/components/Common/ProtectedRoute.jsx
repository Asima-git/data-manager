import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Retrieve user and role data from localStorage
  const user = localStorage.getItem("role"); // Example: { role: "Admin", auth: true }

  // If no user data is found, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user's role is not allowed, redirect to home
  if (allowedRoles && !allowedRoles.includes(user)) {
    return <Navigate to="/" replace />;
  }

  // Render children if everything is valid
  return children;
};

export default ProtectedRoute;
