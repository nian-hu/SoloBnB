import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    // const paramsString = this.props.history.location.hash;
    this.searchParams = new URLSearchParams(`${this.props.history.location.hash}`)

    const lat = parseFloat(this.searchParams.get('lat')) || 40.716880; 
    const long = parseFloat(this.searchParams.get('long')) || -73.948810;
    // debugger

    const startDate = this.searchParams.get('checkin') || null;
    const endDate = this.searchParams.get('checkout') || null;

    this.center = {
      lat: lat,
      lng: long
    }

    // use this to set center of map!
    this.mapOptions = {
      center: this.center,
      zoom: 13
    }
    //check what the dates are
    // debugger

    this.dates = {
      startDate: startDate,
      endDate: endDate
    }
    console.log('constructing')

  }

  // componentWillUnmount() {
  //   console.log('unmounting')
  // }

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

    debugger
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    // debugger

    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
    // this.clearHash()
  }

  // clearHash() {
  //   this.searchParams = '';
  // }

  componentDidUpdate(prevProps) {
    // debugger
    if (this.props.history.location.hash !== prevProps.location.hash) {
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
    // } else {
    //   // debugger
    //   google.maps.event.addListener(this.map, 'idle', () => {
    //     const directions = this.map.getBounds().toJSON();
    //     const bounds = {
    //       northEast: { lat: directions.north, lng: directions.east },
    //       southWest: { lat: directions.south, lng: directions.west }
    //     }
    //     // this.props.updateFilter("bounds", bounds)
    //     this.props.updateFilter({
    //       "bounds": bounds,
    //       "dates": {
    //         startDate: null,
    //         endDate: null
    //       }
    //     })
    //   })
    // }

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
      this.props.updateFilter({
        "bounds": bounds,
        "dates": this.dates
      })
    })
  }


  render() {
    return (
      <div className="map-container" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default withRouter(ListingMap);