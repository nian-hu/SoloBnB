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

class AuthNormal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.state = {
      dropdown: false
    }
  }

  handleDropdown() {
    this.setState({dropdown: !this.state.dropdown})
  }

  render() {

    const { currentUser, logout, openModal } = this.props;

    const dropdown = this.state.dropdown ? (
      <div className='dropdown-container'>
        <ul className='dropdown-list'>
          <li className='dropdown-item'>
            Hello
          </li>
          <li className='dropdown-item'>
            Sup
          </li>
        </ul>
      </div>
    ) : null

    const display =
      currentUser ? (
        <div className='header-profile-container'>
          {/* <h1>Someone is logged in </h1>
        <h1>That person is {currentUser.fname}</h1> */}

          {/* <h1 className='header-user-normal'>{currentUser.fname} {currentUser.lname}</h1> */}
          {/* <button className='header-logout-normal' onClick={() => logout()}>Log out</button> */}
          <img
            className='header-profile-picture'
            src={currentUser.photoUrl}
            onClick={() => this.handleDropdown()}
          />
          {dropdown}
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
}

// const AuthNormal = ({ currentUser, logout, openModal }) => {
//   debugger
  
//   const display =
//     currentUser ? (
//       <div className='header-profile-container'>
//         {/* <h1>Someone is logged in </h1>
//         <h1>That person is {currentUser.fname}</h1> */}

//         {/* <h1 className='header-user-normal'>{currentUser.fname} {currentUser.lname}</h1> */}
//         {/* <button className='header-logout-normal' onClick={() => logout()}>Log out</button> */}
//         <img 
//           className='header-profile-picture' 
//           src={currentUser.photoUrl}
//           // onClick={() => this.handleDropdown()}
//         />
//       </div>
//     ) : (
//         <nav className='login-signup-normal'>
//           <button className='session-button-normal' onClick={() => openModal('login')}>Log in</button>
//           &nbsp;
//           <button className='session-button-normal' onClick={() => openModal('signup')}>Sign up</button>
//         </nav>
//       );

//   return display;
// }

export default connect(msp, mdp)(AuthNormal);