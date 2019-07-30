import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { merge } from 'lodash'

const _defaultState = {
  id: null,
}

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = merge({}, state);
      newState.id = action.user.id;
      return newState;
    }
    case LOGOUT_CURRENT_USER: {
      return _defaultState;
    }
    default:
      return state;
  }
}