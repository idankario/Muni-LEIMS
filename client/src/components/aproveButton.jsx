import { styled } from "@mui/material/styles";
import React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

export const Button = styled("button")({
  position: "fixed",
  right: "0px",
  top: "7%",
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
function AproveButton() {
  return (
    <Button>
      <AddTaskIcon
        style={{
          color: "white",
          fontSize: "2em",
          padding: "1px",
        }}
      />
    </Button>
  );
}
export default AproveButton;
