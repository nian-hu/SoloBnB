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
  debugger
  
  const display =
    currentUser ? (
      <div className='header-profile-container'>
        {/* <h1>Someone is logged in </h1>
        <h1>That person is {currentUser.fname}</h1> */}
        
        {/* <h1 className='header-user-normal'>{currentUser.fname} {currentUser.lname}</h1> */}
        {/* <button className='header-logout-normal' onClick={() => logout()}>Log out</button> */}
        <img className='header-profile-picture' src={currentUser.photoUrl}/>
      </div>
    ) : (
        <nav className='login-signup-normal'>
          <button className='session-button-normal' onClick={() => openModal('login')}>Log in</button>
          &nbsp;
          <button className='session-button-normal' onClick={() => openModal('signup')}>Sign up</button>
        </nav>
      );

  return display;
}

export default connect(msp, mdp)(AuthNormal);