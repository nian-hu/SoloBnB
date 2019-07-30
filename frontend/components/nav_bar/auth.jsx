import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ( {currentUser, logout} ) => {
  const display =
    currentUser ? (
      <div>
        <h1>{currentUser.fname} {currentUser.lname}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    ) : (
        <div>
          <Link className="link" to="/signup">Sign Up</Link>
          <Link className="link" to="/login">Log In</Link>
        </div>
      );

  return (
    <div>
      {display}
    </div>
  )
}

export default Auth;