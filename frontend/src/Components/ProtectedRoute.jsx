import React from 'react'
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, requiredRole}) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"))

  if (!token || ! user ){
    return <Navigate to="/Login" />;
    // navigate('/login')
  }
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/Dashboard" />;
  }

  return children;
  
}

export default ProtectedRoute