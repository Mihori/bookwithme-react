import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { toUpperCase } from '../../../helpers';

class RentalSearchListing extends React.Component {

  constructor() {
    super();

    this.state = {
      searchedCity: ''
    }
  }

  componentWillMount() {
    this.searchRentalsByCity();
  }
  
  searchRentalsByCity() {
    const searchedCity = this.props.match.params.city;
    this.setState({
      searchedCity
    });
  
    this.props.dispatch(actions.getRentals(searchedCity));
  }

  renderTitle() {
    const { errors, data } = this.props.rentals;
    const { searchedCity } = this.state;
    let title = '';
    console.log(this.props.rentals)

    if (errors.length > 0) {
      title = errors[0].detail;
    }

    if(data.length > 0) {
      title = `Your Home in City of ${toUpperCase(searchedCity)}`;
    }

    return <h1 className="page-title">{title}</h1>
  }

  render() {
    return (
      <section id="rentalListing">
        {this.renderTitle()}
        <RentalList rentals={this.props.rentals} />
      </section>

    )
  }
}

function mapStateToProps(state) {  
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalSearchListing);
