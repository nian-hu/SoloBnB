import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
// import { openModal } from '../../action/modal_actions';
import { createBooking, receiveBooking } from '../../actions/booking_actions';
import moment from 'moment';

const msp = state => {

  const bookedDates = [];

  if (state.entities.bookings) {
    const bookings = Object.values(state.entities.bookings);
    bookings.forEach(booking => {
      let date = moment(booking.start_date);
      let end = moment(booking.end_date);
      while (date < end) {
        bookedDates.push(date);
        date = moment(date, "MM/DD/YYYY").add(1, "days");
      }
    })
  }

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

export default connect(msp, mdp)(BookingForm)