import React from 'react';
// import ListingDescription from './listing_description';

// my listing has array of amenities ids!!!!

class ListingShow extends React.Component {
  componentDidMount() {
    const { fetchListing } = this.props;
    fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Fetching listings...</div>
    }

    return (
      <div>
        <h1>{listing.title}</h1>
        <h2>{listing.price}</h2>
        <p>{listing.description}</p>
        {/* <ListingDescription listing={listing} /> */}
      </div>
    )
  }
}

export default ListingShow;
