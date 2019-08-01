import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import { selectAmenities } from '../../reducers/selectors'; 

const msp = (state, ownProps) => {
  // const listing = state.entities.listings[ownProps.match.params.listingId]
  // return {
  //   listing
  // }

  const { listingId } = ownProps.match.params;
  const listing = state.entities.listings[listingId] || {};
  // debugger
  const amenities = selectAmenities(state, listingId);
  // const amenities = selectAmenities(state, listingId);
  // const amenities = listing.amenity_ids.map(id => {
  //   state.entities.amenities[id]
  // })
  // debugger;

  return {
    listing,
    amenities
  }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  }
}

export default connect(msp, mdp)(ListingShow)