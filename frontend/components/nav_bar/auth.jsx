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

const Auth = ( {currentUser, logout, openModal} ) => {
  const display =
    currentUser ? (
      <hgroup className='header-group'>
        <h1 className='header-user'>{currentUser.fname} {currentUser.lname}</h1>
        <button className='header-logout' onClick={() => logout()}>Log out</button>
      </hgroup>
      ) : (
        <nav className='login-signup'>
          <button className='session-button' onClick={() => openModal('login')}>Log in</button>
          &nbsp;
          <button className='session-button' onClick={() => openModal('signup')}>Sign up</button>
        </nav>
      );

  return display;
}

export default connect(msp, mdp)(Auth);