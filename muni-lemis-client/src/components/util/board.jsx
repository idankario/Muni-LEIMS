import { styled } from "@mui/material/styles";
import MenuImage from "../images/word.png";
import LoginImage from "../images/login.png";

export const Menu = styled("main")({
  paddingTop: "35px",
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${MenuImage}) no-repeat`,
  minHeight: "calc(100vh - 60px)",
  backgroundSize: "100% 100%",
  "& section": {
    textAlign: "center",
    margin: "auto",
    width: "350px",
  },
  "& button": {
    margin: "20px",
  },
});
export const Login = styled("form")({
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${LoginImage}) no-repeat`,
  paddingTop: "35px",
  minHeight: "calc(100vh - 95px)",
  backgroundSize: "100% 100%",
  width: "100%",
  textAlign: "center",
  "& img": {
    width: "170px",
    height: "110px",
    marginTop: "-20px",
    verticalAlign: "middle",
  },
  "& section": {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
  },
  "& section >*": {
    marginBottom: "20px",
  },
  "& .MuiOutlinedInput-root": {
    background: "#fff",
    marginRight: "9px",
    borderRadius: "30px 30px",
    opacity: "0.9",
    width: "326px",
    height: "52px",
    boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.02)",
  },
  "& .MuiButton-root": {
    width: "350px",
    height: "44px",
    borderRadius: "30px 30px",
    opacity: "0.9",
    backgroundColor: "#CDFA00",
    color: "#000",
    ":hover": {
      backgroundColor: "#ECB22F",
    },
  },
  "& section svg": {
    backgroundColor: "white",
    borderRadius: "50%",
    fontSize: "8em",
  },
});
