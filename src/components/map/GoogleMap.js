import React from 'react';
import { Cacher } from 'services/cacher';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
} from "react-google-maps";

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

    getGeocodedLocation() {
      const location = this.props.location;
      const geocoder = new window.google.maps.Geocoder();

      if (this.cacher.isValueCached(location)) {
        this.setState({
          coordinates: this.caches.getCachedValue(location)
        });    
      } else {
        geocoder.geocode({address: location}, (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
            
            this.cacher.cacheValue(location, coordinates);

            this.setState({
              coordinates
            });
          }
        });
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
