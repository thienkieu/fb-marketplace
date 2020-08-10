import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { initGoogleMapLib } from '../Map';
const DistanceLocation = (props) => {
  const [distance, setDistance] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const success = (v) => {
    let directionsService = new google.maps.DirectionsService();
    const route = {
        origin: new google.maps.LatLng(props.source.lat, props.source.lng),
        destination: new google.maps.LatLng(v.coords.latitude, v.coords.longitude),
        travelMode: google.maps.TravelMode.WALKING
    }

    directionsService.route(route,
      function(response, status) {
        if (status !== 'OK') {
          setDistance('Can not get location');
          return;
        } else {
          var directionsData = response.routes[0].legs[0];
          if (!directionsData) {
            setDistance('Can not get location');
            return;
          }
          else {
            let d = "";
            if (props.format) {
              d = props.format(directionsData.distance.text, directionsData.duration.text );
            }else {
              d = " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
            }

            setDistance(d);
            return;
          }
        }
      });

  }

  const error = (e) => {
    console.log(e);
  }

  const getCurrentLocation = () => {
    if (window.navigator.geolocation) {
      return window.navigator.geolocation.getCurrentPosition(success, error);
    } else {
      return false;
    }
  }

  useEffect(()=>{
    initGoogleMapLib(() => {
      const getDestinationLocation = props.destinationLocation ? success({coords: {latitude: props.destinationLocation.lat, longitude: props.destinationLocation.lng}}) : getCurrentLocation();
    });
  }, [props.key]);
  return (
    <div>{distance}</div>
  );
}

export default DistanceLocation;
