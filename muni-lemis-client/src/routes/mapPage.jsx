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

  const [dataLocation, setLocation] = useState({
    municipality: office.office_name,
    mapPosition: {
      lat: parseFloat(office.lat),
      lng: parseFloat(office.lng),
    },
  });

  const getmunicipality = (addressArray) => {
    let municipality = "";
    for (let i = 0; i < addressArray.length; i += 1) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j += 1) {
          if (
            addressArray[i].types[j] === "sublocality_level_1" ||
            addressArray[i].types[j] === "locality"
          ) {
            municipality = addressArray[i].long_name;
            return municipality;
          }
        }
      }
    }
    return municipality;
  };

  useEffect(() => {
    async function getDataDB() {
      const typeOffice = await TypeOffice();
      if (typeOffice) setMarkers(await getAllSwLocation());
      else setMarkers(await getSwLocation());
    }

    getDataDB();
  }, []);
  const onLoad = (autocomplete) => {
    setPlace(autocomplete);
  };
  const onPlaceSelected = () => {
    const addressArray = place.getPlace().address_components;
    const municipality = getmunicipality(addressArray);
    const latValue = place.getPlace().geometry.location.lat();
    const lngValue = place.getPlace().geometry.location.lng();
    setLocation({
      municipality: municipality || "",
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
            zoom={15}
          >
            {markers.map((marker) => (
              <InfoSW style={{ backgroundColor: "none" }} marker={marker} />
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
