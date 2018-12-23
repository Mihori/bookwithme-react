import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component {

  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return (
        <RentalCard rental={rental} key={index}/>
      )
    });
  }

  render() {
    return (
        <div className="row">
          {this.renderRentals()}
        </div>
    )
  }
}
