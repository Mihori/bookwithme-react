import React from 'react';
import * as actions from 'actions';
import { Link } from 'react-router-dom';

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
    const { userRentals } = this.state;

    return (
      <div>
        {
          userRentals.map((rental, index) => <p> {rental.title} </p>)
        }
        <section id='userRentals'>
  <h1 className='page-title'>My Rentals</h1>
  <div className='row'>

    <div className='col-md-4'>
      <div className='card text-center'>
        <div className='card-block'>
          <h4 className='card-title'>Rental Title - Rental City</h4>
          <Link className='btn btn-bwm' to='rental detail page'>Go to Rental</Link>
          <button className='btn btn-bwm'> Bookings </button>
        </div>
        <div className='card-footer text-muted'>
          Created at 2018/04/04
        </div>
      </div>
    </div>

  </div>
  <div className='alert alert-warning'>
    You dont have any rentals currenty created. If you want advertised your property
    please follow this link.
    <Link style={{'marginLeft': '10px'}} className='btn btn-bwm' to='create form'>Register Rental</Link>
  </div>
</section>
      </div>
    )
  }
}