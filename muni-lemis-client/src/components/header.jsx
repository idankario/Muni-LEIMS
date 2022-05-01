import { styled } from "@mui/material/styles";
import Logo from "./images/logo.svg";

const Header = styled("header")({
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
export default Header;
