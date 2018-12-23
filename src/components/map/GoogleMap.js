import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapComponent = props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  )

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
      const geoCoder = new window.google.maps.GeoCoder();

      geoCoder.geocode({address: location}, (result, status) => {
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
