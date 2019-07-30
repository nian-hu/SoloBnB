import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  }
}

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(SessionForm)