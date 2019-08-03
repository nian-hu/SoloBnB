import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const receiveAllBookings = bookings => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings
  }
}

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  }
}

export const removeBooking = booking => {
  return {
    type: REMOVE_BOOKING,
    bookingId: booking.id
  }
}

export const fetchAllBookings = () => {
  return dispatch => {
    return BookingAPIUtil.fetchAllBookings()
      .then(bookings => {
        return dispatch(receiveAllBookings(bookings))
      })
  }
}

export const fetchBooking = id => {
  return dispatch => {
    return BookingAPIUtil.fetchBooking(id)
      .then(booking => {
        return dispatch(receiveBooking(booking))
      })
  }
}

export const createBooking = (booking, listingId) => {
  return dispatch => {
    return BookingAPIUtil.createBooking(booking, listingId)
      .then(booking => {
        return dispatch(receiveBooking(booking))
      })
  }
}

export const updateBooking = booking => {
  return dispatch => {
    return BookingAPIUtil.updateBooking(booking)
      .then(booking => {
        return dispatch(receiveBooking(booking))
      })
  }
}

export const deleteBooking = id => {
  return dispatch => {
    return BookingAPIUtil.deleteBooking(id)
      .then(booking => {
        return dispatch(removeBooking(booking))
      })
  }
}