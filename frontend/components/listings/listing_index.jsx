import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarNormal from '../nav_bar/nav_bar_normal'

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
        <NavBarNormal/>
        <ul>
          {listingItems}
        </ul>
      </div>
    )
  }
}

export default ListingIndex;