import React from 'react';
import NavBarNormal from '../nav_bar/nav_bar_normal';

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
          <h1>Booking Index Item Goes Here</h1>
          <h2>{booking.start_date}</h2>
          <h2>{booking.end_date}</h2>
        </div>
      )
    })

    return (
      <div>
        <NavBarNormal />
        This is where the booking items will go:
        <ul>
          {bookingItems}
        </ul>
      </div>
    )
    
  }
  
}

export default BookingIndex;