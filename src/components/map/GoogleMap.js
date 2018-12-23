import React from 'react';
import { Cacher } from 'services/cacher';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
} from "react-google-maps";
import { reject } from 'q';

const MapComponent = props => {
  const { coordinates } = props;

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={coordinates}
      center={coordinates}
    >
      <Circle
        center={coordinates}
        radius={500}
      />
    </GoogleMap>
  )
}

const withGeoCode = WrappedComponent => (
  class extends React.Component {

    constructor() {
      super();
      this.cacher = new Cacher;
      this.state = {
        coordinates: {
          latitude: 0,
          longitude: 0
        }
      }
    }

    componentWillMount() {
      this.getGeocodedLocation();
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
        this.setState({
          coordinates: this.caches.getCachedValue(location)
        });    
      } else {
        this.geocodeLocation(location).then(
          (coordinates) => {
            this.setState({
              coordinates
            });
          },
          (error) => {
            console.log(error);
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
