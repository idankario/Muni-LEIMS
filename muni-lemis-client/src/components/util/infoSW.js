import React from "react";
import { styled } from "@mui/material/styles";
import { InfoWindow } from "@react-google-maps/api";
import Logomap from "../images/logomap.png";

export const Div = styled("div")({
  width: "125px",
  height: "125px",
});

//  {
//   display: none !important;
// }
// .gm-style .gm-style-iw  {
//   display: none !important; /* <-- this will generally work on the fly. */
//   visibility: hidden; /* this 2 lines below are just for hard hiding. :) */
//   opacity: 0;
// }
//   {display: none !important;}
// button.gm-ui-hover-effect {
//
// }
export const Section = styled("section")({});
function InfoSW(props) {
  const { marker } = props;
  return (
    <InfoWindow
      key={`${marker.lat}${marker.lat}`}
      position={{
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      }}

      //  onCloseClick={() => {
      //    setSelected(null);
      //  }}
    >
      <Div style={{ textAlign: "center" }}>
        <h3 style={{ color: "red" }}>Switchboard 303</h3>
        <img alt="switchboard" title="switchboard" src={Logomap} />
        <p>Average consumption {marker.name}</p>
      </Div>
    </InfoWindow>
  );
}
export default InfoSW;
