import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { isSameDay } from 'react-dates';

const msp = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId)
  const bookings = Object.values(state.entities.bookings).filter(obj => obj['listing_id'] === listingId)
  const bookedDates = [];

  bookings.forEach(booking => {
    let start = moment(booking.start_date);
    let end = moment(booking.end_date);
    while (start < end) {
      bookedDates.push(start);
      start = moment(start, 'MM/DD/YYYY').add(1, 'days');
    }
  })

  return {
    bookedDates
  }
}

class ListingAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
    this.isBlocked = this.isBlocked.bind(this);
  }

  isBlocked(day1) {
    return this.props.bookedDates.some(day2 => {
      return isSameDay(day1, day2);
    })
  }

  render() {
    return (
      <div>
        <DayPickerRangeController
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          numberOfMonths={2}
          noBorder={true}
          isDayBlocked={this.isBlocked}
        />
      </div>
    )
  }
}

// export default ListingAvailability;
export default withRouter(connect(msp, null)(ListingAvailability));