import React from "react";
import { styled } from "@mui/material/styles";
import { OverlayView } from "@react-google-maps/api";
import Logomap from "../images/logomap.png";
import SteetLight from "../images/streetlight.png";

export const Div = styled("div")({
  width: "55px",
  textAlign: "center",
  fontSize: "0.55rem;",
  opacity: "0.8",
  background: "#fff",
  borderRadius: "20%",
  fontWeight: "bold",
  padding: "9px",
});

export function InfoSW(props) {
  const { marker } = props;
  return (
    <OverlayView
      isHeatmapVisible={false}
      position={{
        lat: marker.lat,
        lng: marker.lng,
      }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <Div>
        <h3 style={{ color: "red" }}>Switchboard {marker.name}</h3>
        <img alt="switchboard" title="switchboard" src={Logomap} />
        <p>Average consumption {marker.energy_inetensity}</p>
      </Div>
    </OverlayView>
  );
}

export function InfoStreetlight(props) {
  const { marker } = props;

  return (
    <OverlayView
      isHeatmapVisible={false}
      position={{
        lat: parseFloat(marker.lat) + 0.001,
        lng: parseFloat(marker.lng) + 0.001,
      }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <img
        style={{ cursor: "pointer" }}
        alt="steetLight"
        title="steetLight"
        src={SteetLight}
      />
    </OverlayView>
  );
}
