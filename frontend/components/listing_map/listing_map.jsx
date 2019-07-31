import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.716880, lng: -73.948810 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    debugger
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
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  render() {
    return (
      <div className="map-container" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default ListingMap;