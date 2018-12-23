import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
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
      this.state = {
        coordinates: {
          latitude: 0,
          longitude: 0
        }
      }
    }

    componentWillMount() {
      this.geoCodeLocation();
    }

    geoCodeLocation() {
      const location = this.props.location;
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({address: location}, (result, status) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location;
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };

          this.setState({
            coordinates
          })
        }
      });
    }

    render() {
      return (
        <WrappedComponent {...this.state} />
      )
    }
  }
)

export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));
