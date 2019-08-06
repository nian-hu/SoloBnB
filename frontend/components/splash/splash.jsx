import React from "react";
import Navbar from "../nav_bar/nav_bar";
import SearchForm from '../search/search_form';

// import SplashForm from './splash_form';

const Splash = () => {
    return (
    <div className="splash">
      <Navbar />
      <SearchForm />
      {/* <EntireListingIndex /> */}
      {/* <SplashForm /> */}
    </div>
  )
}

//kind of works
// const Splash = () => {
//   return (
//   <div id="home" className="splash">
//     <div className="nav">
//       <Navbar />
//     </div>

//     <div className="inner">
//       <div id="backgroundchange">
//         <div className="background-img" id="bg1"></div>
//         <div className="background-img" id="bg2"></div>
//         <div className="background-img" id="bg3"></div>
//         <div className="background-img" id="bg4"></div>
//         <div className="background-img" id="bg5"></div>
//       </div>
//     </div>
//   </div>
//   )
// }



//THIS WORKS
// const Splash = () => {
//   return (
//     <div className="splash">
//       <Navbar />
//     </div>
//   );
// };

export default Splash;