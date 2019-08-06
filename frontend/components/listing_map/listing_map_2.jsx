// import React from 'react';
// import MarkerManager from '../../util/marker_manager';
// import { withRouter } from 'react-router-dom';

// // setState according to query string OR map bounds
// // set INTERNAL state
// // listen to the last action that was performed


// class ListingMap extends React.Component {
//   constructor(props) {
//     // make these instance variables!
//     //paramsString and searchParams
//     super(props);
//     this.paramsString = this.props.history.location.hash;
//     this.searchParams = new URLSearchParams(this.paramsString)

//     this.lat = parseFloat(this.searchParams.get('lat')) || 40.716880;
//     this.long = parseFloat(this.searchParams.get('long')) || -73.948810;
//     // theory: this is getting hit when map is moved
//     // debugger

//     this.startDate = this.searchParams.get('checkin') || null;
//     this.endDate = this.searchParams.get('checkout') || null;
//   }

//   // clearHash() {
//   //   debugger
//   //   this.paramsString = '';
//   // }

//   // when you move the map, the component isnt UPDATING
//   // the component is RE-RENDERING (therefore it goes to MOUNT)
//   componentDidMount() {
//     this.center = {
//       lat: lat,
//       lng: long
//     }

//     // use this to set center of map!
//     // UH OH
//     // the zoom is always 10!!!

//     this.mapOptions = {
//       // center: this.center,
//       center: center,
//       zoom: 10
//     }
//     //check what the dates are
//     // debugger

//     this.dates = {
//       startDate: startDate,
//       endDate: endDate
//     }

//     ////

//     this.map = new google.maps.Map(this.mapNode, this.mapOptions);
//     // debugger

//     this.MarkerManager = new MarkerManager(this.map);
//     this.MarkerManager.updateMarkers(this.props.listings);
//     this.registerListeners();

//     //when component mounts the first time, look at hash
//     // this.clearHash();
//   }

//   componentDidUpdate(prevProps) {
//     this.center = {
//       lat: lat,
//       lng: long
//     }

//     // use this to set center of map!
//     // UH OH
//     // the zoom is always 10!!!

//     this.mapOptions = {
//       // center: this.center,
//       center: center,
//       zoom: 10
//     }
//     //check what the dates are
//     // debugger

//     this.dates = {
//       startDate: startDate,
//       endDate: endDate
//     }

//     if (this.props.history.location.hash.length > 0 && this.props.history.location.hash !== prevProps.location.hash) {
//       // debugger
//       const newParams = new URLSearchParams(`${this.props.history.location.hash}`);
//       const newLat = parseFloat(newParams.get('lat')) || 40.716880;
//       const newLong = parseFloat(newParams.get('long')) || -73.948810;

//       this.map.setCenter({
//         lat: newLat,
//         lng: newLong
//       })
//     }

//     this.MarkerManager.updateMarkers(this.props.listings);
//   }

//   registerListeners() {
//     google.maps.event.addListener(this.map, 'idle', () => {
//       const directions = this.map.getBounds().toJSON();
//       const bounds = {
//         northEast: { lat: directions.north, lng: directions.east },
//         southWest: { lat: directions.south, lng: directions.west }
//       }
//       // this.props.updateFilter("bounds", bounds)
//       // debugger
//       this.props.updateFilter({
//         "bounds": bounds,
//         "dates": {
//           startDate: null,
//           endDate: null
//         }
//       })

//     })
//   }


//   render() {
//     // debugger
//     return (
//       <div className="map-container" ref={map => this.mapNode = map}>
//       </div>
//     )
//   }
// }

// // export default withRouter(ListingMap);
// export default withRouter(ListingMap);