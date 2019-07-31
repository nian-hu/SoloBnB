import React from 'react';
import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component {
  componentDidMount() {
    const { fetchListings } = this.props;
    fetchListings(); 
  }

  render() {
    const { listings } = this.props;
    const listingItems = listings.map((listing, idx) => {
      return (
        <ListingIndexItem key={idx} listing={listing} />
      )
    })

    return (
      <div>
        <ul>
          {listingItems}
        </ul>
      </div>
    )
  }
}

export default ListingIndex;