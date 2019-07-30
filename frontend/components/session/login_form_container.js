import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  }
}

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: (
      <button className='other-form' onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(SessionForm)