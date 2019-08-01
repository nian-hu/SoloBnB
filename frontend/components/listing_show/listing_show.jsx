import React from 'react';
import ListingDescription from './listing_description';
import ListingAmenities from './listing_amenities';

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
          <ListingDescription listing={listing} />
          {/* <ListingAmenities listing={listing} /> */}
          <ListingAmenities listing={listing} amenities={amenities} />
        </div>
      )
    }

    
  }
}

export default ListingShow;
