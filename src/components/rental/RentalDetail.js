import React from 'react';

export class RentalDetail extends React.Component {

  render() {
    console.log(this.props.match.params.id);
    return(
      <p>RentalDetailComponent</p>
      )
    }
}
