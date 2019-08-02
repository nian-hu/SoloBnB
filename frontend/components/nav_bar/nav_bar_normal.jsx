import React from 'react';
import AuthNormal from './auth_normal';

const NavBarNormal = (props) => {
  
  return (
    <div className='nav-normal'>  
      <div className='nav-logo'></div>
      <AuthNormal />
    </div>
  )
}

export default NavBarNormal;