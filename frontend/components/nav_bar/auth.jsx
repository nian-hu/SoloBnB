import React from 'react'

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

export default Auth;