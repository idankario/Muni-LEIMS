import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Menu } from "../components/util/board";
import Header from "../components/header";
import { Input, ContainerStyle } from "../components/map";
import BackButton from "../components/backButton";
import Container from "../components/container";
import { getSwLocation, getAllSwLocation, TypeOffice } from "../Api";
import InfoSW from "../components/util/infoSW";
import { useRef } from "react";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

Geocode.setApiKey("AIzaSyCf0iztfol9X-90VBF5j-OXdOaywUqj1PQ");
Geocode.enableDebug();
const api =  "AIzaSyCf0iztfol9X-90VBF5j-OXdOaywUqj1PQ";

function Map() {
  const office = JSON.parse(localStorage.getItem("office"));
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(0);
  const [directionsResponse,setdirectionsResponse]=useState(null);
  const [distance,setdistance]=useState('');
  const [map,setMap]=useState(null);

  /** @type react.MutableRefObject<HTMLInputElement>*/
  const originRef=useRef()
  /** @type react.MutableRefObject<HTMLInputElement>*/
  const destiantionRef=useRef()
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

  async function calll(){
    if(originRef.current.value === '' || destiantionRef.current.value === ''){
      return
    }
    const directionService=new google.maps.DirectionsService()
    const results= await directionService.route({
      origin:originRef.current.value,
      destination:destiantionRef.current.value,
      travelMode:google.maps.TravelMode.DRIVING
    })
    setdirectionsResponse(results)
    setdistance(results.routes[0].legs[0].distance.text)

  }
  async function clearr(){
   setdirectionsResponse(null)
   setdistance('')

   originRef.current.value=''
   destiantionRef.current.value=''
   
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
         onLoad={(map)=>setMap(map)}
         onClick={ev => {
          console.log("latitide = ", ev.latLng.lat());
          console.log("longitude = ", ev.latLng.lng());
        }}
          >
           
            {markers.map((marker) => (
              <InfoSW
                key={`${marker.lat}${marker.lat}`}
                style={{ backgroundColor: "none" }}
                marker={marker}
              />
            ))}
            {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              
              <Input type="text" placeholder="Search location" />
            </Autocomplete>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <Input style={{ marginLeft: "20vh", color: "red" }}type="text" placeholder="Origin" ref={originRef}/>
            </Autocomplete>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <Input style={{ marginLeft: "50vh", color: "red" }} type="text" placeholder="Destination" ref={destiantionRef} />
            </Autocomplete>
            <Typography style={{color:"white",background:"black",position:"absolute",top:"170px"}}>Distance:{distance}</Typography>
            <Button style={{background:"black",position:"absolute",top:"250px"}} type="submit"  onClick={calll}>
              cal
            </Button>
            <Button style={{background:"black",position:"absolute",top:"250px",left:"100px"}} type="submit" onClick={clearr}>
              clear
            </Button>
          </GoogleMap>
        </LoadScript>

        
      </Menu>
      <BackButton />
    </Container>
  );
}

export default Map;
