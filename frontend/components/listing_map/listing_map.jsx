import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    const paramsString = this.props.history.location.hash;
    const searchParams = new URLSearchParams(paramsString)

    const lat = parseFloat(searchParams.get('lat'))
    const long = parseFloat(searchParams.get('long'))
    const startDate = searchParams.get('checkin')
    const endDate = searchParams.get('checkout')

    this.center = {
      lat: lat,
      lng: long
    }

    // use this to set center of map!
    this.mapOptions = {
      center: this.center,
      zoom: 10
    }
    // debugger

    this.dates = {
      startDate: startDate,
      endDate: endDate
    }
  }

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

    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    // debugger

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
    this.registerListeners();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const directions = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: directions.north, lng: directions.east },
        southWest: { lat: directions.south, lng: directions.west }
      }
      this.props.updateFilter("bounds", bounds)
      // this.props.updateFilter({
      //   "bounds": bounds,
      //   "dates": this.dates
      // })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.history.location.hash !== prevProps.location.hash) {
      const newParams = new URLSearchParams(`${this.props.history.location.hash}`);
      const newLat = parseFloat(newParams.get('lat'));
      const newLong = parseFloat(newParams.get('long'));
      // debugger
      
      this.map.setCenter({
        lat: newLat,
        lng: newLong
      })
    }

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  render() {
    return (
      <div className="map-container" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default withRouter(ListingMap);