import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Auth from './auth';

const msp = state => {
  const { entities, session } = state;
  return {
    currentUser: entities.users[session.id]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(Auth)
