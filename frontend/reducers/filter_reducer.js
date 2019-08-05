import { UPDATE_FILTER, CLEAR_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

// const defaultState = {
//   bounds: {},
//   filter: {}
// }

const defaultState = {
  bounds: {},
  // dates: {}
  // filter: {}
}

const filterReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER: {
      const newState = merge({}, state);
      newState[action.filter] = action.value;
      return newState;
    }
    case CLEAR_FILTER: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}

export default filterReducer;