import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { createBooking, receiveBooking } from '../../actions/booking_actions';
import moment from 'moment';
import NavBarNormal from '../nav_bar/nav_bar_normal';

const msp = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId; // string of 36
  const listingNumber = parseInt(listingId)
  const bookings = Object.values(state.entities.bookings).filter(obj => obj.listing_id === listingNumber)
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
    booking: {
      startDate: null,
      endDate: null
    },
    formType: 'Create booking',
    //check if there's a user logged in
    //they can't make a booking if they're not logged in!
    userId: state.session.id,
    bookedDates
  }
}

const mdp = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    receiveBooking: (booking) => dispatch(receiveBooking(booking)),
    openLoginModal: () => dispatch(openModal('login'))
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.booking; // {startDate: null, endDate: null}
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    const { userId } = this.props;
    const listingId = this.props.match.params.listingId

    const startDate = moment(this.state.startDate).format("YYYY/MM/DD");
    const endDate = moment(this.state.endDate).format("YYYY/MM/DD");

    e.preventDefault();
      // debugger
    createBooking({
      start_date: startDate,
      end_date: endDate, // not showing up in controller?
      guest_id: userId,
      listing_id: listingId
    });
      // debugger
      // change this later!
    this.props.history.push('/bookings');
  }

  render() {
    return (
      <div>
        <NavBarNormal />
        <div className='confirmation-page'>
          <h1>Review your booking</h1>

          <button onClick={this.handleSubmit} className='confirmation-button'>
            Confirm
        </button>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(Confirmation)