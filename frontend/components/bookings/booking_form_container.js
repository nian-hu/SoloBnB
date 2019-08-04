import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { openModal } from '../../action/modal_actions';
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
    action: (booking, listingId) => dispatch(createBooking(booking, listingId)), 
    receiveBooking: (booking) => dispatch(receiveBooking(booking)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(BookingForm)