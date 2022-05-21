import { styled } from "@mui/material/styles";

export const Input = styled("input")({
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px",
});

export const H1 = styled("h1")({
  margin: "auto",
  textAlign: "center",
  width: "700px",
  maxWidth: "95%",
  background: "#fff",
  paddingTop: "10px",
  fontSize: "45px",
});

export const ContainerStyle = {
  height: "650px",
  width: "100%",
  margin: "auto",
  marginTop: "-45px",
};
