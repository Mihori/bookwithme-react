import React from 'react';
import { MapWithAMarker } from 'components/map/GoogleMap';

export class RentalMap extends React.Component {

  render() {
    const location = this.props.location;

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjT6y1x_AYDFISVD6th6AxY90P1CFnw2E&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    )
  }
}
