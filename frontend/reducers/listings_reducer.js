import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS: {
      return merge({}, action.listings);
    }
    case RECEIVE_LISTING: {
      const newState = merge({}, state);
      newState[action.listing.id] = action.listing;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default listingsReducer;