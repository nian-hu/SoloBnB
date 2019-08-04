import React from 'react';
import NavBarNormal from '../nav_bar/nav_bar_normal';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  componentDidMount() {
    const { fetchAllBookings } = this.props;
    fetchAllBookings();
  }

  render() {
    const { bookings } = this.props;

    if (!bookings) {
      return <div className="loader">Loading...</div>
    }

    const bookingItems = bookings.map((booking, idx) => {
      return (
        <div key={idx}>
          {/* <h1>Booking Index Item Goes Here</h1>
          <h2>{booking.start_date}</h2>
          <h2>{booking.end_date}</h2> */}
          <BookingIndexItem booking={booking} />
        </div>
      )
    })

    const bookingIndexText = (
      bookings.length ? (
        "You have upcoming trips. Manage and view your bookings here."
      ) : (
        "You have no upcoming trips."
      )
    )

    return (
      <div>
        <NavBarNormal />
        <div className='booking-index-info'>
          <h1>Upcoming Plans</h1>
          {bookingIndexText}
        </div>
        <ul>
          {bookingItems}
        </ul>
      </div>
    )
    
  }
  
}

export default BookingIndex;