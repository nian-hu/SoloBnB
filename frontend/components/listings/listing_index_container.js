import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions'; 

const msp = state => {
  const listings = Object.values(state.entities.listings);
  return {
    listings
  }
}

const mdp = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  }
}

export default connect(msp, mdp)(ListingIndex)