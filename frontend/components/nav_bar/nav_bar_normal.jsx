import React from 'react';
import AuthNormal from './auth_normal';
import { Redirect, withRouter } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const NavBarNormal = (props) => {
  
  return (
    <div className='nav-normal'>  
      {/* <div className='nav-logo' onClick={this.props.history.push('/')}></div> */}
      <div className='sub-nav-normal'>
        <div className='nav-logo' onClick={() => props.history.push('/')}></div>
        <SearchBar />
      </div>

      <div className='sub-nav-normal2'>
      <AuthNormal />
      </div>
    </div>
  )
}

export default withRouter(NavBarNormal);