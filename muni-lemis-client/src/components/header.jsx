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

const P = styled("p")({
  position: "absolute",
  right: "10px",
  top: "5px",
  padding: "3px",
  fontSize: "25px",
  color: "#b8e100",
});

export default function Header() {
  const OfficeName = JSON.parse(localStorage.getItem("office"));
  return (
    <HeaderTemplate>
      <a href="/#">
        <span>Muni-LEIMS</span>
      </a>
      {OfficeName ? <P>{OfficeName.office_name}</P> : ""}
    </HeaderTemplate>
  );
}
