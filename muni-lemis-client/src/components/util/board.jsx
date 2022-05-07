import { styled } from "@mui/material/styles";
// import MenuImage from "../images/word.png";
// import LoginImage from "../images/login.png";

export const Menu = styled("main")({
  "& section": {
    textAlign: "center",
    margin: "auto",
    width: "400px",
  },
  "& button": {
    margin: "20px",
  },
});
export const Login = styled("form")({
  textAlign: "center",
  "& img": {
    width: "170px",
    height: "110px",
    verticalAlign: "middle",
  },
  "& section": {
    margin: "auto",
    width: "400px",
  },
  "& section >*": {
    marginBottom: "20px",
  },
  "& .MuiOutlinedInput-root": {
    background: "#fff",
    borderRadius: "30px 30px",
    opacity: "0.9",
    width: "326px",
    height: "52px",
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
