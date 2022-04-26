import { styled } from "@mui/material/styles";
import button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Select from 'react-select';
import { Card } from "@mui/material";
import MenuImage from "../images/word.svg";
import Logo from "../images/logo.svg";
import LoginImage from "../images/login.svg";

export const Header = styled("header")({
  padding: "10px",
  "& a": {
    display: "inline-block",
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "50px 40px",
  },
  "& span": {
    color: "#CDFA00",
    fontSize: "31px",
    paddingLeft: "70px",
  },
  height: "40px",
  backgroundColor: "#2E2E2E ",
});

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
  paddingTop: "35px",
  minHeight: "100vh",
  textAlign: "center",
  "& img": {
    display: "block",
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
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${LoginImage}) no-repeat`,
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
  "& .css-i4bv87-MuiSvgIcon-root ": {
    backgroundColor: "white",
    borderRadius: "50%",
    fontSize: "100px",
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

export const WhiteBoard = styled("section")({
  width: "390px",
  minHeight: "350px",
  background: "#fff",
  marginBottom: "40px",
  padding: "20px",
  borderRadius: "20px 20px 20px 20px",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "orange",
  "&:focus, &:hover": {
    textDecoration: "none",
    color: "#7790F6",
  },
});
export const SqButton = styled(button)(({ theme }) => ({
  flexDirection: "column",
  fontSize: "12px",
  boxShadow: "0 0 6px hsl(210 14% 90%)",
  width: "80px",
  height: "80px",
  margin: "20px",
  fontFamily: "Segoe UI",
  color: "#fff",
  background: theme.color ? theme.color : "#28D38A",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: theme.hover ? theme.hover : "#ECB22F",
  },
}));

// export const SelectDroupDown = styled(Select)({
//     '& .css-6j8wv5-Input': {
//         padding: "14px",
//     },
//     '& .css-1s2u09g-control': {
//         margin: "7px",
//     }
// });

export const ProgressStyle = styled("progress")({
  padding: "20px",
  marginTop: "10px",
  width: "150px",
});

export const FlexSection = styled("section")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "45px",
  width: "390px",
  paddingBottom: "30px",
});

export const H5styles = styled("h5")({
  fontFamily: "Segoe UI",
  color: "#6441a4",
  marginTop: "20px",
});

export const CardStyle = styled(Card)({
  width: 320,
  margin: "auto",
  height: 170,
  textAlign: "center",
  borderRadius: "21px",
  backgroundColor: "#884EA0",
  padding: "5px",
  "& p:nth-of-type(1)": {
    color: "#ECB22F",
    fontSize: "38px",
  },
  "& p:nth-of-type(2)": {
    fontSize: "20px",
    opacity: 0.8,
  },
  "& p": {
    fontFamily: "cursive",
    fontWeight: "700",
  },
  "& button": {
    width: "10px",
  },
});
