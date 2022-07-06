import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";
import Logo from "./images/logoBody.png";

const HeaderTemplate = styled("header")({
  padding: "10px",
  "& a": {
    display: "inline-block",
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "3.5em 1.8em",
  },
  "& span": {
    color: "#CDFA00",
    fontSize: "1.5em",
    paddingLeft: "2.5em",
    height: "1.5em",
    paddingTop: "-0.65em",
    verticalAlign: "center",
    display: "inline-block",
  },
  backgroundColor: "#2E2E2E ",
});

const P = styled("p")({
  position: "absolute",
  right: "10px",
  top: "6px",
  fontSize: "1.2em",
  color: "#b8e100",
  "& button": {
    color: "#b8e100",
    paddingTop: "4px",
  },
});

export default function Header() {
  const navigate = useNavigate();
  const [officeName, setOfficeName] = useState("");
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("office"));
    setOfficeName(name);
  }, []);

  const signOut = () => {
    localStorage.clear();
    navigate("/#");
  };

  return (
    <HeaderTemplate>
      <a href={officeName ? "/homepage" : "#"}>
        <span>Muni-LEIMS</span>
      </a>
      {officeName ? (
        <P>
          <IconButton onClick={() => signOut()} aria-label="exitToAppIcon">
            <ExitToAppIcon />
          </IconButton>
          {officeName.office_name}
        </P>
      ) : (
        ""
      )}
    </HeaderTemplate>
  );
}
