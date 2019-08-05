import { OPEN_MODAL, CLOSE_MODAL, OPEN_AMENITIES_MODAL } from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL: {
      const modal = action.modal;
      // debugger
      // modal is normally just the word "signup"
      return modal;
    } 
    case OPEN_AMENITIES_MODAL: {
      // is it resetting the state too many times here?
      return {
        modal: action.modal,
        amenities: action.amenities
      }
      //now modal is { modal: 'signup', amenities: [] }
    }
    case CLOSE_MODAL: {
      return null;
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;