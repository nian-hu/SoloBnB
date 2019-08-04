import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
// import { openModal } from '../../action/modal_actions';
import { createBooking, receiveBooking } from '../../actions/booking_actions';

const msp = state => {
  return {
    booking: {
      startDate: null,
      endDate: null
    },
    formType: 'Create booking'
  }
}

const mdp = dispatch => {
  return {
    createBooking: (booking, listingId) => dispatch(createBooking(booking, listingId)), 
    receiveBooking: (booking) => dispatch(receiveBooking(booking)),
    openLoginModal: () => dispatch(openModal('login'))
  }
}

export default connect(msp, mdp)(BookingForm)