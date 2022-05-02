import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const Button = styled("button")({
  position: "absolute",
  left: "25px",
  bottom: "25px",
  fontSize: " 1.5em",
  backgroundColor: "#7bd529",
  transition: "transform 0.2s ease",
  fontWeight: "bold",
  display: "grid",
  borderRadius: "50%",
  cursor: "pointer",
  border: "none",
  "&:hover": {
    transform: "scale(1.2)",
  },
});
function BackButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/homePage")}>
      <ArrowCircleLeftIcon
        style={{
          color: "white",
          fontSize: "2em",
          padding: "1px",
        }}
      />
    </Button>
  );
}
export default BackButton;
