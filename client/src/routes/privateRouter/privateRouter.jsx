import React from "react";
// import axios from "axios";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // isauth() returns true or false based on localStorage
  // try {
  //   axios({
  //     method: "get",
  //     url: "https://api.muni-leims.ml/auth",
  //     headers: { Authorization: localStorage.getItem("token") },
  //   });
  //   return children;
  // } catch (error) {
  //   return <Navigate to="/" />;
  // }
  // eslint-disable-next-line
  // console.log(localStorage.getItem("token"));
  const authed = localStorage.getItem("user") && localStorage.getItem("token");
  return authed ? children : <Navigate to="/" />;
}

export default PrivateRoute;
