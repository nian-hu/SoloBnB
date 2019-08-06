import React from 'react';
import AuthNormal from './auth_normal';
import { Redirect, withRouter } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const NavBarShow = (props) => {

  return (
    <div className='nav-show'>
      {/* <div className='nav-logo' onClick={this.props.history.push('/')}></div> */}
      <div className='sub-nav-show'>
        <div className='nav-logo' onClick={() => props.history.push('/')}></div>
        <SearchBar />
      </div>

      <div className='sub-nav-show2'>
        <AuthNormal />
      </div>
    </div>
  )
}

export default withRouter(NavBarShow);