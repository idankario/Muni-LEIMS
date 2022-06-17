/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Typography } from "@mui/material";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import { Input, ContainerStyle } from "../components/map";
import BackButton from "../components/backButton";
import Container from "../components/container";
import { getSwLocation, getAllSwLocation, TypeOffice } from "../Api";
import { InfoSW, InfoStreetlight } from "../components/util/infoSW";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.enableDebug();
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
  const office = JSON.parse(localStorage.getItem("office"));
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(0);
  const [stList, setStList] = useState([
    {
      lat: "32.507550439791146",
      lng: "35.049342265487546",
    },
    { lat: "32.50733159468576", lng: "35.049313431741155" },
  ]);
  const [directionsResponse, setdirectionsResponse] = useState(null);
  const [distance, setdistance] = useState("");
  let count = 0;

  const [dataLocation, setLocation] = useState({
    mapPosition: {
      lat: parseFloat(office.lat),
      lng: parseFloat(office.lng),
    },
  });
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  useEffect(() => {
    async function getDataDB() {
      const typeOffice = await TypeOffice();
      if (typeOffice) {
        setMarkers(await getAllSwLocation());
        setZoom(10);
      } else {
        setMarkers(await getSwLocation());
        setZoom(14);
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

  function haversineDistance(mk1, mk2) {
    // eslint-disable-next-line no-undef
    // const directionsService = new google.maps.DirectionsService(mk1, mk2);
  }

  function calculateRoute() {
    if (count) {
      haversineDistance();
      count = 0;
    } else {
      count += 1;
    }
  }

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
              <InfoSW key={`${marker.lng}${marker.lat}`} marker={marker} />
            ))}
            {markers.map((marker) => (
              <InfoStreetlight
                key={`${marker.lng}${marker.lat}`}
                marker={marker}
              />
            ))}

            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <Input type="text" placeholder="Search location" />
            </Autocomplete>
            <Typography
              style={{
                fontSize: "18px",
                background: "white",
                position: "absolute",
                left: "12%",
                top: "2%",
              }}
            >
              Distance:{distance}
            </Typography>
          </GoogleMap>
        </LoadScript>
      </Menu>
      <BackButton />
    </Container>
  );
}

export default Map;
