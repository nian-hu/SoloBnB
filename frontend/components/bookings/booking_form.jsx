import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, isSameDay } from 'react-dates';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking; // {startDate: null, endDate: null}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { booking, formType, createBooking, receiveBooking, openModal } = this.props;
    
    e.preventDefault();
    return (
      <h1>The form has been submitted</h1>
    )
  }

  renderStars() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<i key={i} className="far fa-star"></i>)
    }

    return stars;
  }

  render() {
    // const { listing, formType, action, receiveBooking, openModal } = this.props;

    return (
      <div className='booking-form-container'>
        <div className='booking-form-info'>
          <div className='price-info'>
            <p className='booking-price'>${this.props.listing.price}</p>
            <p className='per-night'>per night</p>
          </div>
          <p className='booking-stars'>{this.renderStars()}</p>
        </div>

        <h1 className='booking-form-dates-title'>Dates</h1>
        <div className='booking-form-date-picker'>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => 
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
        />
        </div>

        <button onClick={this.handleSubmit} className='reservation-button'>
          Reserve
        </button>
      </div>
    )
  }  
}

export default BookingForm;