import styled from "@mui/material/styles";
import button from "@mui/material/Button";
import MenuImage from "../images/word.svg";
import LoginImage from "../images/login.svg";

export const Menu = styled("main")({
  paddingTop: "20px",
  "& h2": {
    fontSize: "45px",
    color: "#CDFA00",
  },
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${MenuImage}) no-repeat`,
  minHeight: "100vh",
  "& section": {
    textAlign: "center",
    margin: "auto",
    width: "350px",
  },
  "& button": {
    margin: "20px",
  },
});
export const MenuL = styled(Menu)({
  "& h1": {
    margin: "auto",
    textAlign: "center",
    width: "700px",
    maxWidth: "95%",
    background: "#fff",
    paddingTop: "10px",
    fontSize: "45px",
  },
});
export const Login = styled("form")({
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${LoginImage}) no-repeat`,
  paddingTop: "35px",
  minHeight: "100vh",
  textAlign: "center",
  "& img": {
    width: "170px",
    height: "110px",
    marginTop: "-20px",
    verticalAlign: "middle",
  },
  "& h2": {
    display: "inline-block",
    fontSize: "45px",
    color: "#CDFA00",
    marginLeft: "10px",
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

export const Button = styled(button)(({ theme }) => ({
  boxShadow: "0 0 6px hsl(210 14% 90%)",
  height: "80px",
  margin: "30px 0px",
  background: theme.color ? theme.color : "#000000",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: theme.hover ? theme.hover : "#ECB22F",
  },
  "& h2": {
    fontSize: "22px",
  },
}));
