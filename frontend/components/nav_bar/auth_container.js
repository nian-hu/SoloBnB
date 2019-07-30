import { connect } from 'react-redux'
import Auth from './auth'
import { logout } from '../../actions/session_actions'

const msp = state => {
  const { entities, session } = state;
  return {
    currentUser: entities.users[session.id]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Auth)
