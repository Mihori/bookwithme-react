import axios from 'axios';

import { RESET_RENTAL,
         RENDER_RENTAL,
         RENDER_RENTALS,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         LOGOUT,
         GET_RENTALS_INIT,
         GET_RENTALS_FAIL,
         FETCH_USER_BOOKINGS_FAIL,
         FETCH_USER_BOOKINGS_SUCCESS,
         FETCH_USER_BOOKINGS_INIT } from "./types";
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

const getRentalsInit = (errors) => {
  return {
    type: GET_RENTALS_INIT
  }
}

const getRentalsFail = (errors) => {
  return {
    type: GET_RENTALS_FAIL,
    errors
  }
}

export const getRentals = (city) => {
  const url = city ? `/rentals/?city=${city}` : '/rentals';

  return dispatch => {
    dispatch(getRentalsInit());
    axiosInstance.get(url)
      .then(res => res.data)
      .then(rentals => dispatch(renderRentals(rentals)))
      .catch(({response}) => dispatch(getRentalsFail(response.data.errors)))
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

export const createRental = (rentalData) => {
  return axiosInstance.post('/rentals', rentalData).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

// USER BOOKINGS ACTIONS ---------------------------

const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOKINGS_INIT
  }
}

const fetchUserBookingsSuccess = (userBookings) => {
  return {
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
  }
}

const fetchUserBookingsFail = (errors) => {
  return {
    type: FETCH_USER_BOOKINGS_FAIL,
    errors
  }
}

export const fetchUserBookings = () => {
  return dispatch => {
    dispatch(fetchUserBookingsInit());

    axiosInstance.get('/bookings/manage')
      .then(res => res.data )
      .then(userBookings => dispatch(fetchUserBookingsSuccess(userBookings)))
      .catch(({response}) => dispatch(fetchUserBookingsFail(response.data.errors)))
  }
}

// USER RENTALS ACTIONS ---------------------------

export const getUserRentals = () => {
  return axiosInstance.get('/rentals/manage').then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

export const deleteRental = (rentalId) => {
  return axiosInstance.delete(`/rentals/${rentalId}`).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors))
}

// AUTH ACTIONS

export const register = (userdata) => {
  return axios.post('http://localhost:3001/api/v1/users/register', userdata).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

const loginSuccess = () => {
const username = authService.getUsername();

  return {
    type: LOGIN_SUCCESS,
    username
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

// BOOKING ACTIONS

export const createBooking = (booking) => {
  return axiosInstance.post('http://localhost:3001/api/v1/bookings', booking)
      .then(res => res.data)
      .catch(({response}) => Promise.reject(response.data.errors))
}
