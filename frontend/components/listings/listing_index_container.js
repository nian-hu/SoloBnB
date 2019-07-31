import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings } from '../../actions/listing_actions';

const msp = state => {
  const listings = Object.values(state.entities.listings);
  return {
    listings
  }
}

const mdp = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(msp, mdp)(ListingIndex)