import { RESET_RENTAL, RENDER_RENTAL, RENDER_RENTALS } from "../actions/types";

const INITIAL_STATE = {
  rentals: {
    data: []
  },
  rental: {
    data: {}
  }
}

export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {
  switch(action.type) {
    case RENDER_RENTALS:    
      return { ...state, data: action.rentals.data };
    default:
      return state;
  }
}

export const selectedRentalReducer = (state = INITIAL_STATE.rental, action) => {
  switch(action.type) {
    case RESET_RENTAL:
    return { ...state, data: {} };
    case RENDER_RENTAL: 
    return { ...state, data: action.rental }
    default:
      return state;
  }
}
