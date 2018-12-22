import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class RentalDetail extends React.Component {

  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }

  render() {
    return(
      <p>RentalDetailComponent</p>
      )
    }
}

function mapStateToProps(state) {  
  return {
  }
}

export default connect(mapStateToProps)(RentalDetail);