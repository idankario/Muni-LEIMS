import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { Header, Menu } from '../component/util/board';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.enableDebug();
const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const containerStyle = {
  height: '500px',
  paddingTop: '10px',
  margin: '0 auto',
  maxWidth: '700px',
};

function Map() {
  const [place, setPlace] = useState('');
  const [dataLocation, setLocation] = useState({
    city: '',
    height: 400,
    mapPosition: {
      lat: 31.804381,
      lng: 34.655314,
    },
  });
  const getCity = (addressArray) => {
    let city = '';
    for (let i = 0; i < addressArray.length; i += 1) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j += 1) {
          if (
            addressArray[i].types[j] === 'sublocality_level_1' ||
            addressArray[i].types[j] === 'locality'
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
          city: city || '',
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
      city: city || '',
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <Menu>
        <h1
          style={{
            background: '#fff',
            maxWidth: '700px',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          {dataLocation.city}
        </h1>
        <LoadScript googleMapsApiKey={api} libraries={['places']}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={dataLocation.mapPosition}
            zoom={15}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelected}>
              <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
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
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-120px',
                }}
              />
            </Autocomplete>
          </GoogleMap>
        </LoadScript>
      </Menu>
    </>
  );
}

export default Map;
