import { RESET_RENTAL, RENDER_RENTAL, RENDER_RENTALS, GET_RENTALS_INIT, GET_RENTALS_FAIL } from "../actions/types";

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
    case GET_RENTALS_INIT:
    return { ...state, data: [], errors: [] };
    case RENDER_RENTALS:    
      return { ...state, data: action.rentals };
    case GET_RENTALS_FAIL:
      return { ...state, data: [], errors: action.errors };
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
