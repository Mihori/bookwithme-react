import React from 'react';
import { Cacher } from 'services/cacher';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
  InfoWindow,
  Marker
} from "react-google-maps";

const MapComponent = props => {
  const { coordinates, isError, isLocationLoaded } = props;
  
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={coordinates}
      center={coordinates}
      options={{ disableDefaultUI: isError ? true : false }}
    >
      {isLocationLoaded && !isError && <Circle center={coordinates} radius={500} />}
      {isLocationLoaded && isError && 
      <Marker>
      <InfoWindow position={coordinates} options={{ maxWidth: 300 }}>
        <div>
          Oops, the location cannot be found on the map.
          We are trying to resolve the issue as fast as possible.
          Contact host for additional information if you are still interested in booking this place.
          We are sorry for the inconvinience.
        </div>
      </InfoWindow>
    </Marker>}
    </GoogleMap>
  )
}

const withGeoCode = WrappedComponent => (
  class extends React.Component {

    constructor() {
      super();
      this.cacher = new Cacher();
      this.state = {
        coordinates: {
          latitude: 0,
          longitude: 0
        },
        isError: false,
        isLocationLoaded: false
      }
    }

    componentWillMount() {
      this.getGeocodedLocation();
    }

    updateCoordinates(coordinates) {
      this.setState({
        coordinates,
        isLocationLoaded: true
      });
    }

    geocodeLocation(location) {
      const geocoder = new window.google.maps.Geocoder();

      return new Promise((resolve, reject) => {
        geocoder.geocode({address: location}, (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
            
            this.cacher.cacheValue(location, coordinates);

            resolve(coordinates);
          } else {
            reject('ERROR!');
          }
        });
      });

    }

    getGeocodedLocation() {
      const location = this.props.location;

      if (this.cacher.isValueCached(location)) {
        this.updateCoordinates(this.caches.getCachedValue(location));  
      } else {
        this.geocodeLocation(location).then(
          (coordinates) => {
            this.updateCoordinates(coordinates);  
          },
          (error) => {
            this.setState({
              isError: true,
              isLocationLoaded: true
            });
          }
        );
      }

    }

    render() {
      return (
        <WrappedComponent {...this.state} />
      )
    }
  }
)

export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));
