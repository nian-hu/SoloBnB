import React from 'react'
// import AuthContainer from './nav_bar/auth_container'
import Modal from '../components/modal/modal';
import Splash from '../components/splash/splash';
import Navbar from '../components/nav_bar/nav_bar';
import { Route, Switch } from 'react-router-dom';
import ListingIndexContainer from '../components/listings/listing_index_container'
import ListingShowContainer from '../components/listing_show/listing_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BookingIndexContainer from '../components/bookings/booking_index_container'; 
import EntireListingIndex from '../components/listings/entire_listing_index';

// import Background from '../components/splash/background';

// import GreetingContainer from './greeting/greeting_container'

// import LoginFormContainer from './session/login_form_container'
// import SignupFormContainer from './session/signup_form_container'
// import AuthRoute from '../util/route_util'
// import BenchIndexContainer from '../components/bench/bench_index_container'
// import SearchContainer from '../components/bench/search_container'

const App = () => {
  return (
    <div>       
      <Modal />
      {/* <Background /> */}
      {/* <Route path='/' component={Navbar} /> */}
      {/* <Route exact path='/' component={Splash} /> */}
      <AuthRoute exact path='/' component={Splash} />
      <ProtectedRoute exact path='/bookings' component={BookingIndexContainer}/>

      <Route exact path='/listings' component={EntireListingIndex} /> 
      {/* <Route exact path='/listings' component={ListingIndexContainer}/>  */}
      <Route path='/listings/:listingId' component={ListingShowContainer}/>
      {/* <Route path='/myAccount' component={UserShowContainer} /> */}
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
