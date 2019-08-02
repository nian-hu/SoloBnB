import React from 'react';
import ListingDescription from './listing_description';
import ListingAmenities from './listing_amenities';
import NavBarNormal from '../nav_bar/nav_bar_normal';

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
    if (!listing) {
      return <div>Fetching listing...</div>
    } else {
      return (
        <div>
          <NavBarNormal />
          <div className='listing-show-container'>
            <div className='listing-description'>
              <ListingDescription listing={listing} />
            </div>

            <div className='listing-amenities'>
              <ListingAmenities listing={listing} amenities={amenities} />
            </div>
          </div>
        </div>
      )
    }

    
  }
}

export default ListingShow;
