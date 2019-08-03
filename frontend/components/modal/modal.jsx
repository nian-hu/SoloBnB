import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import AmenitiesModal from '../listing_show/amenities_modal';


const msp = state => {
  debugger
  return {
    modal: state.ui.modal // either a string or an obj
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

// function Modal({ modal, closeModal }) {
function Modal(props) {
  const { closeModal } = props;
  let amenities;
  let modal;

  if (props.modal && typeof props.modal === 'object') {
    modal = props.modal.modal;

    if (props.modal.amenities) {
      amenities = props.modal.amenities;
    }
  } else {
    modal = props.modal;
  }

  if (!modal) return null;

  // if (typeof modal === 'object' && modal.modal === 'amenities') {
  //   component == <AmenitiesModal/>
  // }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'amenities':
      debugger
      component = <AmenitiesModal amenities={amenities} />
      break;
    default:
      return null;
  }

  debugger

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default connect(msp, mdp)(Modal);

