import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import { Input, ContainerStyle } from "../components/map";
import BackButton from "../components/backButton";

import Container from "../components/container";
import { getSwLocation, getAllSwLocation, TypeOffice } from "../Api";
import InfoSW from "../components/util/infoSW";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.enableDebug();
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
  const office = JSON.parse(localStorage.getItem("office"));
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(0);
  const [dataLocation, setLocation] = useState({
    mapPosition: {
      lat: parseFloat(office.lat),
      lng: parseFloat(office.lng),
    },
  });

  useEffect(() => {
    async function getDataDB() {
      const typeOffice = await TypeOffice();
      if (typeOffice) {
        setMarkers(await getAllSwLocation());
        setZoom(9);
      } else {
        setMarkers(await getSwLocation());
        setZoom(15);
      }
    }
    getDataDB();
  }, []);
  const onLoad = (autocomplete) => {
    setPlace(autocomplete);
  };
  const onPlaceSelected = () => {
    const latValue = place.getPlace().geometry.location.lat();
    const lngValue = place.getPlace().geometry.location.lng();
    setLocation({
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  return (
    <Container bgimage={1}>
      <Header />
      <Menu>
        <LoadScript googleMapsApiKey={api} libraries={["places"]}>
          <GoogleMap
            mapContainerStyle={ContainerStyle}
            center={dataLocation.mapPosition}
            zoom={zoom}
          >
            {markers.map((marker) => (
              <InfoSW
                key={`${marker.lat}${marker.lat}`}
                style={{ backgroundColor: "none" }}
                marker={marker}
              />
            ))}

            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <Input type="text" placeholder="Search location" />
            </Autocomplete>
          </GoogleMap>
        </LoadScript>

        <BackButton />
      </Menu>
    </Container>
  );
}

export default Map;
