import React from 'react'

const Auth = ( {currentUser, logout, openModal} ) => {
  const display =
    currentUser ? (
      <hgroup className='header-group'>
        <h1 className='header-user'>{currentUser.fname} {currentUser.lname}</h1>
        <button className='header-logout' onClick={() => logout()}>Logout</button>
      </hgroup>
      ) : (
        <nav className='login-signup'>
          <button onClick={() => openModal('login')}>Login</button>
          &nbsp;or&nbsp;
          <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
      );

  return display;
}

export default Auth;