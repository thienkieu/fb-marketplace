import styled from 'styled-components';
import { useEffect } from 'react';

const GoogleMapEl = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height: '200px' };
`;

const initMap = (initLocation) => {

    return () => {
        const map = new google.maps.Map(
            document.getElementById('google-map'), {zoom: 16, center: initLocation});
        const marker = new google.maps.Marker({position: initLocation, map: map});
        window.isMapInit = true;
        window.mapListener.map(item=>{
          if (item.isCalled === false) {
            item.isCalled = true;
            item.fn();
          }
        });

    }
}

let hasInitGoogleMap = false;

const initGoogleMapLib = (callback) => {
  if (!hasInitGoogleMap) {
    hasInitGoogleMap = true;
    const el =  document.getElementById('google-map-lib');
    window.hasCallInitMap = true;
    var newScript = document.createElement("script");
    document.body.appendChild(newScript);
    window.initGoogleMap = callback;
    window.mapListener = [
    ];
    newScript.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBVSI5QWn2nFvM1cGgYhoJyVpMeKHGxVzg&libraries=geometry,places&callback=initGoogleMap';
  } else {
    if (window.isMapInit === true) {
      callback();
      window.mapListener.push({
        isCalled: true,
        fn: callback
      });
    }else {
      window.mapListener.push({
        isCalled: false,
        fn: callback
      });
    }

  }
}

const Map = (props) => {
    useEffect(()=>{
        initGoogleMapLib(initMap({lat: props.lat, lng: props.lng}));
    }, [props.key]);

    return (
        <div>
            <GoogleMapEl id="google-map"  height={props.height}/>
        </div>
    )
}

export default Map;
export {
  initGoogleMapLib
};
