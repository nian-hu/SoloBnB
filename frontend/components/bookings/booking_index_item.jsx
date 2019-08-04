import React from 'react';

class BookingIndexItem extends React.Component {
  render() {
    const { booking } = this.props;

    return (
      <div className='booking-index-item-content-container'>
        <div className='booking-index-item-header'>
          <h1>{booking.start_date} - {booking.end_date}</h1>
        </div>
      </div>
    )
  }
}

export default BookingIndexItem;