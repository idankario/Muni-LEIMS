import { styled } from "@mui/material/styles";

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
    width: "12em",
    height: "7em",
    verticalAlign: "middle",
  },
  "& section": {
    margin: "auto",
    width: "20em",
  },
  "& section >*:not(svg)": {
    marginBottom: "20px",

    minHeight: "52px",
    opacity: "0.9",
  },
  "& .MuiOutlinedInput-root": {
    background: "#E8F0FE",
  },
  "& .MuiOutlinedInput-root,.MuiButton-root": {
    borderRadius: "30px 30px",
    fontSize: "1.2em",
  },
  "& .MuiButton-root": {
    backgroundColor: "#CDFA00",
    width: "16em",
    color: "#000",
    ":hover": {
      backgroundColor: "#ECB22F",
    },
  },
  "& section > svg": {
    backgroundColor: "#fff",
    borderRadius: "50%",
    margin: "25px",
    fontSize: "8em",
  },
});
