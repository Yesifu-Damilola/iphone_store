/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
