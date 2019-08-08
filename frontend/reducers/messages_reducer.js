import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES: {
      return merge({}, action.messages)
    }
    case RECEIVE_MESSAGE: {
      const newState = merge({}, state);
      newState[action.message.id] = action.message;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default messagesReducer;
