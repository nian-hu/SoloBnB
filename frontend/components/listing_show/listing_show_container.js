import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId]
  return {
    listing
  }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  }
}

export default connect(msp, mdp)(ListingShow)