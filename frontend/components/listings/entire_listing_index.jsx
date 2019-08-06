import React from 'react';
import { connect } from 'react-redux';
// import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions'; 
import ListingMap from '../listing_map/listing_map'; 
import ListingIndex from './listing_index_container';
import NavBarNormal from '../nav_bar/nav_bar_normal';

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
        <NavBarNormal />
        <div className='listings-index-container'>
          <div className='listings-items-index'>
            <ListingIndex listings={listings}/>
          </div>

          <div className='listings-map'>
            <ListingMap updateFilter={updateFilter} listings={listings}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(EntireListingIndex)