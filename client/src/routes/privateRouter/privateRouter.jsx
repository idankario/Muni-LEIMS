import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Check token aturization
  try {
    axios({
      method: "get",
      url: "https://api.muni-leims.ml/auth",
      headers: { Authorization: localStorage.getItem("token") },
    });
    return children;
  } catch (error) {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
