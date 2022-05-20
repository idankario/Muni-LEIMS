import React from "react";
import { styled } from "@mui/material/styles";
import Logo from "./images/logoBody.png";

const HeaderTemplate = styled("header")({
  padding: "10px",
  "& a": {
    display: "inline-block",
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "65px 35px",
  },
  "& span": {
    color: "#CDFA00",
    marginTop: "-6px",
    fontSize: "31px",
    paddingLeft: "70px",
    height: "4vh",
    verticalAlign: "center",
    display: "inline-block",
  },

  backgroundColor: "#2E2E2E ",
});
export default function Header() {
  return (
    <HeaderTemplate>
      <a href="/#">
        <span>Muni-LEIMS</span>
      </a>
    </HeaderTemplate>
  );
}
