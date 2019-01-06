import React from 'react';
import * as actions from 'actions';

export class RentalManage extends React.Component {

  constructor() {
    super();

    this.state = {
      userRentals: [],
      errors: [],
      isFetching: false
    }
  }

  componentWillMount() {
    this.setState({isFetching: true});

    actions.getUserRentals().then(
      userRentals => this.setState({userRentals, isFetching: false}),
      errors => this.setState({errors, isFetching: false}))
  }

  render() {
    return (
      <p>test</p>
    )
  }
}