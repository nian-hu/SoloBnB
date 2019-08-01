import React from 'react';
import Auth from './auth';

//props.pathname.location = '/' then it's transparent
//

const NavBar = (props) => {
  
  // const navOpacity = props.pathname.location === '/' ? (
  //   'transparent'
  // ) : (
  //   'opaque'
  // )

  // const navPositioning = props.pathname.location === '/' ? (
  //   'splash'
  // ) : (
  //   'normal'
  // )

  //className = {`nav-${navOpacity} nav-${navPositioning}`}

  return (
    <div className='nav-splash'>  
      <Auth />
    </div>
  )
}

export default NavBar;