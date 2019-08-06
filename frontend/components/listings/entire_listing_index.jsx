import React from 'react';
import { connect } from 'react-redux';
// import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions'; 
import ListingMap from '../listing_map/listing_map'; 
import ListingIndex from './listing_index_container';

const msp = state => {
  const listings = Object.values(state.entities.listings);
  return {
    listings
  }
}

const mdp = dispatch => {
  return {
    updateFilter: (filterObj) => dispatch(updateFilter(filterObj))
  }
}

class EntireListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listings, updateFilter } = this.props;

    return (
      <div>
        <div>
          <ListingIndex listings={listings}/>
        </div>

        <div>
          <ListingMap updateFilter={updateFilter} listings={listings}/>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(EntireListingIndex)