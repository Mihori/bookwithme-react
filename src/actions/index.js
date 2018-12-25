import axios from 'axios';

import { RESET_RENTAL, RENDER_RENTAL, RENDER_RENTALS, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./types";
import authService from '../services/auth-service';
import axiosService from '../services/axios-service';

const axiosInstance = axiosService.getInstance();

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
    axiosInstance.get('/rentals').then((rentals) => {
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

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}

const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors
  }
}

export const checkAuthState = () => {
  return dispatch => {
    if(authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (userData) => {  
  return dispatch => {
    return axios.post('http://localhost:3001/api/v1/users/auth', userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      });
  }
}

export const logout = () => {
  authService.invalidateUser();

  return {
    type: LOGOUT
  }
}