import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// const msp = (state, ownProps) => {
//   const listing = state.entities.listings[ownProps.match.params.listingId];
//   debugger
//   return {
//     listing
//   }
// }

class IndividualMap extends React.Component {
  componentDidMount() {
    const listing = this.props.listing; 
    // const lat = parseFloat(listing.lat)
    // const long = parseFloat(listing.long)

    debugger
    // let mapOptions;

    // if (Object.keys(listing).length === 0) {
    //   debugger
    //   mapOptions = {
    //     center: { lat: 38.736946, lng: -9.142685 },
    //     zoom: 2
    //   }
    // } else {
    //   mapOptions = {
    //     center: { lat: lat, lng: long },
    //     zoom: 10
    //   }
    // }

    // debugger
    const mapOptions = {
      center: { lat: listing.lat, lng: listing.long },
      zoom: 13
    };

    // const mapNode = document.getElementById('individual-map')

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.createMarkerFromListing(listing);
  }

  render() {
    // debugger
    // if (this.mapNode === undefined) return null;
    // debugger
    return (
      <div className="individual-map" ref={map => this.mapNode = map}>
      </div>
    )
  }
}

// export default withRouter(connect(msp, null)(IndividualMap))
export default IndividualMap;