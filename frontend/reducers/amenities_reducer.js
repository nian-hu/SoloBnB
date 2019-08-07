import { RECEIVE_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const amenitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING: {
      // const amenities = action.amenities;
      const amenities = action.amenities;
      // debugger
      return merge({}, state, amenities);
    }
    default: {
      return state;
    }
  }
}

export default amenitiesReducer;

