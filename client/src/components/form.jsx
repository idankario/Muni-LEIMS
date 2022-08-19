import { styled } from "@mui/material/styles";

export const Main = styled("main")({
  "& section": {
    margin: "auto",
    opacity: "0.9",
    borderRadius: "50px",
    background: "#fff",
    width: "25em",

    padding: "0px 5vw 0px 5vw ",
  },
  "& .MuiFormControl-root": {
    width: "12em",
  },

  "& .MuiInputBase-root": {
    width: "75%",
  },

  "& section >*": {
    textAlign: "center",
    margin: "0.8em 0px",
  },
  "& p:not(h1+p)": {
    textAlign: "left",
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
