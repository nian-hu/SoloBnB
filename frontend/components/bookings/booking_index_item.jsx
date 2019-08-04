import React from 'react';
import moment from 'moment';
import ListingIndexItem from '../listings/listing_index_item';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  const booking = ownProps.booking;
  const listing = state.entities.listings[booking.listing_id];

  return {
    listing
  }
}

const mdp = dispatch => {
  return {
    fetchListing: (id) => dispatch(fetchListing(id))
  }
}

class BookingIndexItem extends React.Component {
  // componentDidMount() {
  //   debugger
  //   // const { listing, booking } = this.props;
  //   this.props.fetchListing(this.props.booking.listing_id)
  // }

  render() {
    // if (!listing) return 'Fetching';
    
    const { booking } = this.props;
    // const startDate = booking.start_date;
    // const startDate2 = new Date(startDate);
    // const startDate3 = moment(startDate).format("MM/DD/YYYY")
    // const startDateFormatted = moment(startDate).format("LL")


    // need to get listing!
    // const listing 

    const { listing } = this.props;

    return (
      <div className='booking-index-item-content-container'>
        <div className='booking-index-item-header'>
          <h1>
          {moment(booking.start_date).format("LL")} - {moment(booking.end_date).format("LL")}</h1>
        </div>

        <div className='booking-index-item'>
          {/* <ListingIndexItem listing={listing} /> */}
          <h1>Figure this out</h1>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(BookingIndexItem);