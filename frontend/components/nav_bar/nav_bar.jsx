import React from 'react';
import AuthContainer from './auth_container';
// import Contact from './contact';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      </div>

      {/* <div className='nav-contact'>
        <Contact />
      </div> */}

      <div className='nav-auth'>
        <AuthContainer />
      </div>
    </div>
  )
}

export default NavBar;