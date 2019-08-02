import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
// import Auth from './auth';

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

const AuthNormal = ({ currentUser, logout, openModal }) => {
  const display =
    currentUser ? (
      <hgroup className='header-group-normal'>
        <h1 className='header-user-normal'>{currentUser.fname} {currentUser.lname}</h1>
        <button className='header-logout-normal' onClick={() => logout()}>Logout</button>
      </hgroup>
    ) : (
        <nav className='login-signup-normal'>
          <button className='session-button-normal' onClick={() => openModal('login')}>Login</button>
          &nbsp;
          <button className='session-button-normal' onClick={() => openModal('signup')}>Signup</button>
        </nav>
      );

  return display;
}

export default connect(msp, mdp)(AuthNormal);