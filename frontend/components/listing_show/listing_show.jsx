import React from 'react';
import ListingDescription from './listing_description';
import ListingAmenities from './listing_amenities';
import NavBarNormal from '../nav_bar/nav_bar_normal';
import ListingPhotos from './listing_photos';
import IndividualMap from '../listing_map/individual_map';
// import ListingMap from '../listing_map/listing_map';

// import ListingShowMap from './listing_show_map';

class ListingShow extends React.Component {
  componentDidMount() {
    const { fetchListing } = this.props;
    // debugger
    fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    const { listing, amenities } = this.props;
    // debugger
    if (Object.keys(listing).length === 0) {
      debugger
      return <div>Fetching listing...</div>
    } else {
      debugger
      return (
        <div>
          <NavBarNormal />
          <ListingPhotos listing={listing}/>
          <div className='listing-show-container'>
            <div className='listing-description'>
              <ListingDescription listing={listing} />
            </div>

            <div className='listing-amenities'>
              <ListingAmenities listing={listing} amenities={amenities} />
            </div>

            <div className='individual-map-container'>
              The neighborhood
              <IndividualMap listing={listing}/>
            </div>
          </div>
        </div>
      )
    }

    
  }
}

export default ListingShow;
