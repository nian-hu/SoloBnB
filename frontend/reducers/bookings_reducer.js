import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS: {
      return merge({}, action.bookings);
    } 
    case RECEIVE_BOOKING: {
      const newState = merge({}, state);
      newState[action.booking.id] = action.booking;
      return newState;
    }
    case REMOVE_BOOKING: {
      const newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    }
    case RECEIVE_LISTING: {
      // const bookings = action.listing.bookings;
      const bookings = action.bookings;
      return merge({}, state, bookings);
    }
    default: {
      return state;
    }
  }
}

export default bookingsReducer;