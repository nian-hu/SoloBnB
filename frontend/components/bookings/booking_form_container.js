import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
// import { openModal } from '../../action/modal_actions';
import { createBooking, receiveBooking } from '../../actions/booking_actions';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

// const msp = state => {
const msp = (state, ownProps) => {

  // const bookedDates = [];

  // if (state.entities.bookings) {
  //   const bookings = Object.values(state.entities.bookings);
  //   bookings.forEach(booking => {
  //     let date = moment(booking.start_date);
  //     let end = moment(booking.end_date);
  //     while (date < end) {
  //       bookedDates.push(date);
  //       date = moment(date, "MM/DD/YYYY").add(1, "days");
  //     }
  //   })
  // }

  // state.entities.bookings
  // {12: {…}, 14: {…}}
  // inside, each one contains listing_id
  // match that listing_id with the one in my URL


  // Object.values(state.entities.bookings)
  // [{}, {}, {}]
  // const test = [{ id: 12, listing_id: 36, guest_id: 168 }, {id: 14, listing_id: 35, guest_id: 168}]

  // let listingId = ownProps.match.params.listingId;
  // const bookedDates2 = [];

  // Object.values(state.entities.bookings).forEach(obj => {
  //   for (let key in obj) {
  //     let listingId = 36;
  //     if (obj['listing_id'] === listingId) {
  //       bookedDates2.push(obj)
  //     }
  //   }
  // })

  // const arr = []
  // test.forEach(obj => {
  //   if (obj.listing_id === 36) {
  //     arr.push(obj)
  //   }
  // })


  // const bookings = state.entities.bookings[ownProps.match.params.listingId]

  const listingId = ownProps.match.params.listingId; // string of 36
  const listingNumber = parseInt(listingId)
  // const bookings = [];


  // Object.values(state.entities.bookings).forEach(obj => {
  //   if (obj.listing_id === listingId) {
  //     bookings.push(obj);
  //   }
  // })

  const bookings = Object.values(state.entities.bookings).filter(obj => obj.listing_id === listingNumber)
  const bookedDates = [];

  bookings.forEach(booking => {
    let start = moment(booking.start_date);
    let end = moment(booking.end_date);
    while (start < end) {
      bookedDates.push(start);
      start = moment(start, 'MM/DD/YYYY').add(1, 'days');
    }
  })

  // if (state.entities.bookings) {
  //   const bookings = Object.values(state.entities.bookings);
  //   bookings.forEach(booking => {
  //     let date = moment(booking.start_date);
  //     let end = moment(booking.end_date);
  //     while (date < end) {
  //       bookedDates.push(date);
  //       date = moment(date, "MM/DD/YYYY").add(1, "days");
  //     }
  //   })
  // }

  // return bookings;

  // debugger

  return {
    booking: {
      startDate: null,
      endDate: null
    },
    formType: 'Create booking',
    //check if there's a user logged in
    //they can't make a booking if they're not logged in!
    userId: state.session.id,
    bookedDates
  }
}

const mdp = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)), 
    receiveBooking: (booking) => dispatch(receiveBooking(booking)),
    openLoginModal: () => dispatch(openModal('login'))
  }
}

export default withRouter(connect(msp, mdp)(BookingForm))