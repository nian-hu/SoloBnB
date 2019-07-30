import React from 'react'
import AuthContainer from './nav_bar/auth_container'
import Modal from '../components/modal/modal'

// import GreetingContainer from './greeting/greeting_container'
// import { Route } from 'react-router-dom'
// import LoginFormContainer from './session/login_form_container'
// import SignupFormContainer from './session/signup_form_container'
// import AuthRoute from '../util/route_util'
// import BenchIndexContainer from '../components/bench/bench_index_container'
// import SearchContainer from '../components/bench/search_container'

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <h1 className="title">SoloBnB</h1>
        <AuthContainer />
      </header>
    </div>
  )
}

export default App;


// const App = () => {
//   return (
//     <div>
//       <header>
//         <h1 className="title">BenchBnB</h1>
//         <GreetingContainer />
//       </header>

//       <AuthRoute path="/login" component={LoginFormContainer} />
//       <AuthRoute path="/signup" component={SignupFormContainer} />
//       <Route exact path="/" component={SearchContainer} />
//     </div>
//   )
// }
