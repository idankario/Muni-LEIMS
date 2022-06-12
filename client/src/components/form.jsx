import { styled } from "@mui/material/styles";

export const Main = styled("main")({
  "& section": {
    margin: "auto",
    opacity: "0.9",
    borderRadius: "50px",
    background: "#fff",
    maxWidth: "30em",
    padding: "2px 0px 5px 40px",
  },
  "& .MuiFormControl-root": {
    width: "14em",
    textAlign: "center",
  },
  "& p:not(h3+p)": {
    textAlign: "left",
  },

  "& .MuiInputBase-root": {
    width: "75%",
  },

  "& section >*": {
    textAlign: "center",
    maxWidth: "80%",
    margin: "0.8em 0px",
  },
  "& .MuiButton-root": {
    width: "16em",
    height: "4em",
    margin: "30px 100px",
    color: "#000",
    textAlign: "center",
    verticalAlign: "center",
    ":hover": {
      backgroundColor: "#ECB22F",
    },
  },
});

export const MenuProps = {
  style: {
    maxHeight: 224,
    width: 250,
  },
};
