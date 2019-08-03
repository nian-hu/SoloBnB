import React from 'react';
import AuthNormal from './auth_normal';
import { Redirect, withRouter } from 'react-router-dom';


const NavBarNormal = (props) => {
  
  return (
    <div className='nav-normal'>  
      {/* <div className='nav-logo' onClick={this.props.history.push('/')}></div> */}
      <div className='nav-logo'></div>
      <AuthNormal />
    </div>
  )
}

export default withRouter(NavBarNormal);