import { GET_RENTALS, RESET_RENTAL, RENDER_RENTAL } from "./types";

const rentals = [{
  id: 1,
  title: "Central Apartment",
  city: "New York",
  street: "Times Sqaure",
  category: "apartment",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 3,
  description: "Very nice apartment",
  dailyRate: 34,
  shared: false,
  createdAt: "24/12/2017"
},
{
  id: 2,
  title: "Central Apartment 2",
  city: "San Francisco",
  street: "Main street",
  category: "condo",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 2,
  description: "Very nice apartment",
  dailyRate: 12,
  shared: true,
  createdAt: "24/12/2017"
},
{
  id: 3,
  title: "Central Apartment 3",
  city: "Bratislava",
  street: "Hlavna",
  category: "condo",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 2,
  description: "Very nice apartment",
  dailyRate: 334,
  shared: true,
  createdAt: "24/12/2017"
},
{
  id: 4,
  title: "Central Apartment 4",
  city: "Berlin",
  street: "Haupt strasse",
  category: "house",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 9,
  description: "Very nice apartment",
  dailyRate: 33,
  shared: true,
  createdAt: "24/12/2017"
}];

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

export const getRentals = () => {
  return {
    type: GET_RENTALS,
    rentals 
  }
}

export const getRentalById = (rentalId) => {
  
  return function(dispatch) {
    dispatch(resetRentals());

    setTimeout(() => {
      const rental = rentals.find(rental => rental.id.toString() === rentalId);
      dispatch(renderRental(rental));
    } ,1000);
  }
}