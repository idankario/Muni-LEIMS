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
  "& h1,&h2,&h3": {
    fontFamily: "Times New Roman, sans-serif",
  },
  body: {
    fontFamily: "Times New Roman",
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
