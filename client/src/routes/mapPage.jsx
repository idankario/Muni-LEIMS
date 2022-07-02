import React, { useState, useEffect } from "react";
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

const lib = ["places"];
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.enableDebug();
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
function Map() {
  const office = JSON.parse(localStorage.getItem("office"));
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(0);
  const [directionsResponse, setdirectionsResponse] = useState(null);
  const [avgDistance, setAvgDistance] = useState("");
  const [destination, setDestination] = useState({
    lat: 41.756795,
    lng: -78.954298,
  });
  const [isDestenation, setIsDestenation] = useState(false);
  const [origin, setOrigin] = useState({ lat: 40.756795, lng: -73.954298 });
  const [dataLocation, setLocation] = useState({
    mapPosition: {
      lat: parseFloat(office.lat),
      lng: parseFloat(office.lng),
    },
  });
  const [count, setCount] = useState(0);

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

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const directionsResult = await directionService.route({
      // eslint-disable-next-line object-shorthand
      origin: origin,
      // eslint-disable-next-line object-shorthand
      destination: destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setdirectionsResponse(directionsResult);
    let totalDistance = 0;
    const { legs } = directionsResult.routes[0];
    for (let i = 0; i < legs.length; i += 1) {
      totalDistance += legs[i].distance.value;
    }
    setAvgDistance((totalDistance / (count + 1)).toFixed(2));
    setCount(count + 1);
  }

  return (
    <Container bgimage={1}>
      <Header />
      <Menu>
        <LoadScript googleMapsApiKey={api} libraries={lib}>
          <GoogleMap
            mapContainerStyle={ContainerStyle}
            center={dataLocation.mapPosition}
            zoom={zoom}
            onClick={(ev) => {
              if (isDestenation) {
                setIsDestenation(false);
                setDestination({ lat: ev.latLng.lat(), lng: ev.latLng.lng() });
                calculateRoute();
              } else {
                setOrigin({ lat: ev.latLng.lat(), lng: ev.latLng.lng() });
                setIsDestenation(true);
              }
            }}
          >
            {markers.map((marker) => (
              <InfoSW
                key={`${marker.lat}${marker.lat}`}
                style={{ backgroundColor: "none" }}
                marker={marker}
              />
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
                left: "11.8%",
                top: "1.5%",
                padding: "5px",
              }}
            >
              Avg Distance:{avgDistance}
            </Typography>
          </GoogleMap>
        </LoadScript>
      </Menu>
      <BackButton />
    </Container>
  );
}

export default Map;
