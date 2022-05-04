import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const Button = styled("button")({
  position: "absolute",
  right: "25px",
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
function InfoButton() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/homePage")}>
        <QuestionMarkIcon
          style={{
            color: "white",
            fontSize: "2em",
            padding: "1px",
          }}
        />
      </Button>
      {/* <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        How are you?
      </Popover> */}
    </>
  );
}
export default InfoButton;
