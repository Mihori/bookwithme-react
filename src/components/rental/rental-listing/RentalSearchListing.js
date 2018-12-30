import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class RentalSearchListing extends React.Component {

  constructor() {
    super();

    this.state = {
      searchedCity: ''
    }
  }

  componentWillMount() {
    const searchedCity = this.props.match.params.city;
    this.setState({
      searchedCity
    })

    this.props.dispatch(actions.getRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home in {this.state.searchedCity}</h1>
        <RentalList rentals={this.props.rentals} />
      </section>

    )
  }
}

function mapStateToProps(state) {  
  return {
    rentals: state.rentals.data
  }
}

export default connect()(RentalSearchListing);
