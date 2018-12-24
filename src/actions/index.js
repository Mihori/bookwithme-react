import axios from 'axios';

import { RESET_RENTAL, RENDER_RENTAL, RENDER_RENTALS } from "./types";

const resetRentals = () => {
  return {
    type: RESET_RENTAL
  }
}

const renderRental = (rental) => {
  return {
    type: RENDER_RENTAL,
    rental
  }
}

const renderRentals = (rentals) => {
  return {
    type: RENDER_RENTALS,
    rentals
  }
}

export const getRentals = () => {
  return dispatch => {
    axios.get('http://localhost:3001/api/v1/rentals').then((rentals) => {
      dispatch(renderRentals(rentals.data)); 
    });
  }
}

export const getRentalById = (rentalId) => {
  
  return function(dispatch) {
    dispatch(resetRentals());

    axios.get(`http://localhost:3001/api/v1/rentals/${rentalId}`).then((rental) => {
     dispatch(renderRental(rental.data));
    });
  }
}

// AUTH ACTIONS

export const register = (userdata) => {
  return axios.post('http://localhost:3001/api/v1/users/register', userdata).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}