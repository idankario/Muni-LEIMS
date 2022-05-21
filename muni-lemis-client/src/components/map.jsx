import { styled } from "@mui/material/styles";
import { GoogleMap } from "@react-google-maps/api";
import React from "react";

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
  color: "#b8e100",
  paddingTop: "10px",
  fontSize: "45px",
});

export const ContainerStyle = {
  height: "700px",
  width: "1100px",
  maxWidth: "95%",
  margin: "auto",



  

};

export function GoogleMapa(mapPosition) {
  return (
    <GoogleMap
      mapContainerStyle={ContainerStyle}
      center={mapPosition}
      zoom={10}
    />
  );
}
