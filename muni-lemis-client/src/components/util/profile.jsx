import React from "react";
import { styled } from "@mui/material/styles";

export const P = styled("p")({
  position: "absolute",
  right: "10px",
  top: "5px",
  padding: "3px",
  fontSize: "25px",
  color: "white",
});

function Profile() {
  const OfficeName = JSON.parse(localStorage.getItem("office"));
  return <P>{OfficeName.office_name}</P>;
}
export default Profile;
