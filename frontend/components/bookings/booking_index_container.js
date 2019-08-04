import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';

const msp = state => {
  const bookings = Object.values(state.entities.bookings)

  return {
    bookings
  }
}

const mdp = dispatch => {
  return {
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    deleteBooking: id => dispatch(deleteBooking(id))
  }
}

export default connect(msp, mdp)(BookingIndex);