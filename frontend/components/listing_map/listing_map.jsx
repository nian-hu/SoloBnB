import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  const bounds = state.ui.filter.bounds;
  let mapCenter;
  if (Object.values(bounds).length === 0) {
     mapCenter = null;
  } else {
    let lat1 = bounds.northEast.lat;
    let lat2 = bounds.southWest.lat;
    let long1 = bounds.northEast.lng;
    let long2 = bounds.southWest.lng;

    let latCenter = ((lat1 + lat2) / 2);
    let longCenter = ((long1 + long2) / 2);

    mapCenter = {
      lat: latCenter,
      lng: longCenter
    }
  }
  
  // do math, get the center from bounds using averages, 
  // this.center will be either this OR if it's null, it'll pull from the URL like it is right now
  return {
    mapCenter
  }
}

class ListingMap extends React.Component {
  constructor(props) {
    // make these instance variables!
    //paramsString and searchParams
    super(props);
    this.paramsString = this.props.history.location.hash;
    this.searchParams = new URLSearchParams(this.paramsString)

    const lat = parseFloat(this.searchParams.get('lat')) || 40.716880; 
    const long = parseFloat(this.searchParams.get('long')) || -73.948810;
    // theory: this is getting hit when map is moved
    debugger

    const startDate = this.searchParams.get('checkin') || null;
    const endDate = this.searchParams.get('checkout') || null;

    //

    const { mapCenter } = this.props;
    let center;

    if (mapCenter) {
      center = mapCenter;
    } else {
      center = {
        lat: lat,
        lng: long
      }
    }

    // this is NEVER changing (url is same, map has moved)
    // this.center = {
    //   lat: lat,
    //   lng: long
    // }

    // use this to set center of map!

    this.mapOptions = {
      // center: this.center,
      center: center,
      zoom: 10
    }
    //check what the dates are
    // debugger

    this.dates = {
      startDate: startDate,
      endDate: endDate
    }
  }

  clearHash() {
    debugger
    this.paramsString = '';
  }

  // when you move the map, the component isnt UPDATING
  // the component is RE-RENDERING (therefore it goes to MOUNT)
  componentDidMount() {
    // const mapOptions = {
    //   center: { lat: 38.747360, lng: -9.164060 },
    //   zoom: 2
    // };

    // const mapOptions = {
    //   center: this.props.center,
    //   zoom: this.props.zoom
    // }

    // this.map = new google.maps.Map(this.mapNode, mapOptions);

    // debugger
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    // debugger

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
    this.registerListeners();

    //when component mounts the first time, look at hash
    this.clearHash();
  }

  componentDidUpdate(prevProps) {
    // debugger
    // prevent infinite re-renders
    // okay here's the problem
    // when i move around the map, the hash in the URL is actually the same
    // thats why it keeps forcibly reverting me back to the location

    //clear the url!!!
    //get rid of hash

    // upon mouse click
    //recalculate long and lat (center)
    // set that to be the hash

    // COMMENT OUT
    // when i enter something into a search bar
    if (this.props.history.location.hash.length > 0 && this.props.history.location.hash !== prevProps.location.hash) {
      debugger
      const newParams = new URLSearchParams(`${this.props.history.location.hash}`);
      const newLat = parseFloat(newParams.get('lat')) || 40.716880;
      const newLong = parseFloat(newParams.get('long')) || -73.948810;
      // debugger
      // debugger

      // debugger

      this.map.setCenter({
        lat: newLat,
        lng: newLong
      })
    } 
    
    // if the URL is literally just "solobnb.com/listings" without any info
    // in other words, if hash doesn't exist
    // hash is an EMPTY STRING

    //COMMENT OUT
    //map move?
    // if (this.props.history.location.hash.length === 0 && this.props.history.location.hash !== prevProps.location.hash) {
    if (this.props.history.location.hash !== prevProps.location.hash) {
      debugger

      const directions = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: directions.north, lng: directions.east },
        southWest: { lat: directions.south, lng: directions.west }
      }

      this.props.updateFilter({
        "bounds": bounds,
        "dates": {
          startDate: null,
          endDate: null
        }
      })

      // google.maps.event.addListener(this.map, 'idle', () => {
      //   const directions = this.map.getBounds().toJSON();
      //   const bounds = {
      //     northEast: { lat: directions.north, lng: directions.east },
      //     southWest: { lat: directions.south, lng: directions.west }
      //   }
      //   // this.props.updateFilter("bounds", bounds)
      //   this.props.updateFilter({
      //     "bounds": bounds,
      //     "dates": {
      //       startDate: null,
      //       endDate: null
      //     }
      //   })
      // })
    }

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const directions = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: directions.north, lng: directions.east },
        southWest: { lat: directions.south, lng: directions.west }
      }
      // this.props.updateFilter("bounds", bounds)
      debugger
      this.props.updateFilter({
        "bounds": bounds,
        "dates": {
          startDate: null,
          endDate: null
        }
      })

    })
  }


  render() {
    debugger
    return (
      <div className="map-container" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

// export default withRouter(ListingMap);
export default withRouter(connect(msp, null)(ListingMap));