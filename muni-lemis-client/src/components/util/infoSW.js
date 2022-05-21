import React from "react";
import { styled } from "@mui/material/styles";
import { OverlayView } from "@react-google-maps/api";
import Logomap from "../images/logomap.png";

export const Div = styled("div")({
  
  width: "125px",
  height: "125px",
<<<<<<< HEAD

  
=======
  textAlign: "center",
  fontSize: "15px",
  opacity: "0.8",
  background: "#fff",
>>>>>>> 9b34d8830fb07a58d5591cb26448acd1e669a8cf
});

export const Section = styled("section")({});
function InfoSW(props) {
  const { marker } = props;
  return (
    <OverlayView
      key={`${marker.lat}${marker.lat}`}
      isHeatmapVisible={false}
      position={{
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
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
export default InfoSW;
