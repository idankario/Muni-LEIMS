import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const useStyles = {
  "*": {
    margin: "0",
    padding: "0",
  },
  body: {
    fontFamily: `'Poppins', sans-serif`,
    minHeight: "100vh",
  },
  a: {
    textDecoration: "none",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        ...useStyles,
      }}
    />
    <App />
  </React.StrictMode>
);
reportWebVitals();
