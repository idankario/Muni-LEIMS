import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import { Input, H1, ContainerStyle } from "../components/map";
import BackButton from "../components/backButton";
import Logomap from "../components/images/logomap.png";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.enableDebug();
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [dataLocation, setLocation] = useState({
    city: "Ashdod",
    mapPosition: {
      lat: 31.804381,
      lng: 34.655314,
    },
  });
  const getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i += 1) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j += 1) {
          if (
            addressArray[i].types[j] === "sublocality_level_1" ||
            addressArray[i].types[j] === "locality"
          ) {
            city = addressArray[i].long_name;
            return city;
          }
        }
      }
    }
    return city;
  };
  useEffect(() => {
    Geocode.fromLatLng(31.804381, 34.655314).then(
      (response) => {
        const addressArray = response.results[0].address_components;
        const city = getCity(addressArray);
        setLocation({
          city: city || "",
          mapPosition: {
            lat: 31.804381,
            lng: 34.655314,
          },
        });
      },
      (error) => error
    );
  }, []);
  const onLoad = (autocomplete) => {
    setPlace(autocomplete);
  };
  const onPlaceSelected = () => {
    const addressArray = place.getPlace().address_components;
    const city = getCity(addressArray);
    const latValue = place.getPlace().geometry.location.lat();
    const lngValue = place.getPlace().geometry.location.lng();
    setLocation({
      city: city || "",
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };
  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  return (
    <>
      <Header />
      <Menu>
        <H1>{dataLocation.city}</H1>
        <LoadScript googleMapsApiKey={api} libraries={["places"]}>
          <GoogleMap
            mapContainerStyle={ContainerStyle}
            onClick={onMapClick}
            center={dataLocation.mapPosition}
            zoom={15}
          >
            {markers.map((marker) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                }}
                icon={{
                  url: `/bear.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            ))}

            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: "red" }}>Switchboard 303</h3>
                  <img alt="switchboard" title="switchboard" src={Logomap} />
                  <p>Average consumption 354</p>
                </div>
              </InfoWindow>
            ) : null}
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <Input type="text" placeholder="Search location" />
            </Autocomplete>
          </GoogleMap>
        </LoadScript>
        <BackButton />
      </Menu>
    </>
  );
}

export default Map;
