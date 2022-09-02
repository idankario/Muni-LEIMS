import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Check token aturization
  const authed = localStorage.getItem("user") && localStorage.getItem("token");
  return authed ? children : <Navigate to="/" />;
}

export default PrivateRoute;
