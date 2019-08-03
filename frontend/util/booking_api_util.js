export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
}

export const fetchBooking = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  })
}

export const createBooking = (booking, listingId) => {
  return $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/bookings`,
    data: {
      booking
    }
  })
}

export const updateBooking = booking => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: {
      booking
    }
  })
}

export const deleteBooking = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  })
}