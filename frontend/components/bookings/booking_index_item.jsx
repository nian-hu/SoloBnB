import React from 'react';
import moment from 'moment';
import ListingIndexItem from '../listings/listing_index_item';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { openReviewModal } from '../../actions/modal_actions';


// const msp = (state, ownProps) => {
//   const booking = ownProps.booking;
//   const listing = state.entities.listings[booking.listing_id];

//   return {
//     listing
//   }
// }

// const mdp = dispatch => {
//   return {
//     fetchListing: (id) => dispatch(fetchListing(id))
//   }
// }

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.cancelBooking = this.cancelBooking.bind(this);
    // this.createReview = this.createReview.bind(this);
  }

  // componentDidMount() {
  //   debugger
  //   // const { listing, booking } = this.props;
  //   this.props.fetchListing(this.props.booking.listing_id)
  // }

  cancelBooking(bookingId) {
    this.props.deleteBooking(bookingId).
      then(() => this.props.fetchAllBookings())
    // this.props.history.push('/listings')
  }

  // createReview(listingId) {
  //   openModal('review', {listingId: listingId})
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

    // temporary!
    const cancelButton = moment(booking.start_date).isAfter(moment(), 'day') ? (
      <button onClick={() => this.cancelBooking(booking.id)} className='cancel-booking-button'>
        Cancel Booking
          </button>
    ) : (
        null
      )

    // only display review button if the booking end date has passed
    //change this to BEFORE
    const reviewButton = moment(booking.end_date).isAfter(moment(), 'day') ? (
      // <button onClick={() => this.createReview(booking.listing.id)} className='review-button'>
      <button onClick={() => dispatch(openReviewModal('create-review', booking.listing.id))} className='review-button'>
        Write Review
            {/* {reviewButtonText} */}
      </button>
    ) : (
      null
    )

    // THIS BUTTON WILL EDIT REVIEWS
    // const reviewButton2 = moment(booking.end_date).isAfter(moment(), 'day') ? (
    //   // <button onClick={() => this.createReview(booking.listing.id)} className='review-button'>
    //   <button onClick={() => dispatch(openReviewModal('update-review', booking.listing.id))} className='review-button</button>'>
    //     Write Review
    //         {/* {reviewButtonText} */}
    //   </button>
    // ) : (
    //   null
    // )

    return (
      <div className='booking-index-item-content-container'>
        <div className='booking-index-item-header'>
          <h1 className='booking-item-dates'>
          {moment(booking.start_date).format("LL")} - {moment(booking.end_date).format("LL")}
          </h1>

          <div className='button-container'> 
          {cancelButton}
          {/* <button onClick={() => this.cancelBooking(booking.id)} className='cancel-booking-button'>
            Cancel Booking
          </button> */}

          {reviewButton}
          </div>
        </div>

        <div className='booking-index-item'>
          <ListingIndexItem listing={booking.listing} />
          {/* <h1>Figure this out</h1> */}
        </div>
      </div>
    )
  }
}

// export default connect(msp, mdp)(BookingIndexItem);
export default withRouter(BookingIndexItem);