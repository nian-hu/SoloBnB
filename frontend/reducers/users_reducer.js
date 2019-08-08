import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    }
    case RECEIVE_LISTING: {
      return merge({}, state, action.host)
    }
    case RECEIVE_USER: {
      const newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    }
    default:
      return state;
  }
}