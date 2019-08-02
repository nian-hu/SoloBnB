import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => {
  debugger
  return {
    errors: state.errors.session,
    formType: 'Sign up'
  }
}

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button className='other-form' onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(SessionForm)