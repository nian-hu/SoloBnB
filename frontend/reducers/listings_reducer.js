import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS: {
      return merge({}, action.listings);
    }
    case RECEIVE_LISTING: {
      const newState = merge({}, state);
      newState[action.listing.id] = action.listing;
      // debugger
      return newState;
    }
    // case RECEIVE_BOOKING: {
    //   const newState = merge({}, state);
    //   newState[action.booking.listing_id] = action.listing;
    //   return newState;
    // }
    case RECEIVE_USER: {
      return merge({}, action.listings)
    }
    default: {
      return state;
    }
  }
}

export default listingsReducer;