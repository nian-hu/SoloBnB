import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarNormal from '../nav_bar/nav_bar_normal';
import ListingMap from '../listing_map/listing_map';

class ListingIndex extends React.Component {
  componentDidMount() {
    // const { fetchListings } = this.props;
    // fetchListings(); 
  }

  render() {
    const { listings } = this.props;
    const listingItems = listings.map((listing, idx) => {
      return (
        <div key={idx} className="listing-item">
          <ListingIndexItem listing={listing} />
        </div>
      )
    })

    return (
      <div>
        <NavBarNormal/>
        <ListingMap listings={listings} updateFilter={this.props.updateFilter}/>
        <ul>
          {listingItems}
        </ul>
      </div>
    )
  }
}

export default ListingIndex;