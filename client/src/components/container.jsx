import { styled } from "@mui/material/styles";
import BlueWordImage from "./images/login.jpg";
import YellowWordImage from "./images/word.jpg";

const Container = styled("div")((bgimage) => ({
  maxWidth: "100vw",
  background: bgimage.bgimage
    ? `linear-gradient(rgba(0.2, 0.2, 0.2, 0.2), rgba(0.2, 0.2, 0.2, 0.2)), url(${YellowWordImage}) no-repeat`
    : `linear-gradient(rgba(0.2, 0.2, 0.2, 0.2), rgba(0.2, 0.2, 0.2, 0.2)), url(${BlueWordImage}) no-repeat`,
  backgroundSize: "100% 100%",
  minHeight: "100vh",
  "& h1, & h2, & h3 ": {
    color: "#b8e100",
    textAlign: "center",
  },
}));
export default Container;
