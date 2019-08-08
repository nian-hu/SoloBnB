import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, isSameDay } from 'react-dates';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking; // {startDate: null, endDate: null}
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.isBlocked = this.isBlocked.bind(this);

    // DO NOT DO THIS
    // this.avgRating = props.avgRating; 
    // debugger
  }

  isBlocked(day1) {
    return this.props.bookedDates.some(day2 => {
      return isSameDay(day1, day2);
    })
  }

  handleSubmit(e) {
    const { userId, booking, formType, createBooking, receiveBooking, openLoginModal } = this.props;
    // const startDate = moment(this.state.startDate).format('L');
    // const endDate = moment(this.state.endDate).format('L');

    const startDate = moment(this.state.startDate).format("YYYY/MM/DD");
    const endDate = moment(this.state.endDate).format("YYYY/MM/DD");
    // debugger

    // react moment does this:
    // 08/16/2019
    // month day year

    // find a way to organize it like this instead
    // 16/08/2019
    // send it up that way
    // change it to day/month/year
    // OR year month date


    e.preventDefault();
    if (userId) {
      // debugger
      createBooking({
        start_date: startDate,
        end_date: endDate, // not showing up in controller?
        guest_id: userId,
        listing_id: this.props.listing.id
      });
      // debugger
      // change this later!
      this.props.history.push('/bookings');
    } else {
      openLoginModal();
    }
  }

  // handleChange(field) {
  //   return (e) => {
  //     this.setState({[field]: e.target.value})
  //   }
  // }

  // renderStars() {
  //   const stars = [];

  //   for (let i = 0; i < 5; i++) {
  //     stars.push(<i key={i} className="far fa-star"></i>)
  //   }

  //   return stars;
  // }

  renderStars(num) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < num) {
        stars.push(<i key={i} className="fas fa-star"></i>)
      } else {
        stars.push(<i key={i} className="far fa-star"></i>)
      }
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
          <p className='booking-stars'>{this.renderStars(this.props.avgRating)}</p>
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
            isDayBlocked={this.isBlocked}
        />
        </div>

        <button onClick={this.handleSubmit} className='reservation-button'>
          Reserve
        </button>
      </div>
    )
  }  
}

export default withRouter(BookingForm);