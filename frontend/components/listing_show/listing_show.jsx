import React from 'react';
import ListingDescription from './listing_description';
import ListingAmenities from './listing_amenities';
// import NavBarNormal from '../nav_bar/nav_bar_normal';
import NavBarShow from '../nav_bar/nav_bar_show';
import ListingPhotos from './listing_photos';
import IndividualMap from '../listing_map/individual_map';
import ListingShowCalendar from '../calendar/listing_show_calendar';
import BookingForm from '../bookings/booking_form_container';
import ListingAvailability from './listing_availability';
import ReviewIndex from '../reviews/review_index_container';

// import ListingMap from '../listing_map/listing_map';

// import ListingShowMap from './listing_show_map';

class ListingShow extends React.Component {
  componentDidMount() {
    const { fetchListing } = this.props;
    // debugger
    fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    const { listing, amenities, bookedDates } = this.props;
    // debugger
    if (Object.keys(listing).length === 0) {
      // return <div>Fetching listing...</div>
      return <div className="loader">Loading...</div>
    } else {
      return (
        <div>
          <NavBarShow />
          <div className='listing-show-content'>
          <ListingPhotos listing={listing}/>
          
          <div className="main-section">
            
            <div className='content'>
              <div className='listing-description'>
                <ListingDescription listing={listing} />
              </div>

              <div className='listing-amenities'>
                <ListingAmenities listing={listing} amenities={amenities} />
              </div>

              <div className='listing-availability'>
                <h1 className='availability-header'>Availability</h1>
                <ListingAvailability listing={listing} />
              </div>

              <div className='listing-reviews'>
                <h1 className='reviews-header'>Reviews</h1>
                <ReviewIndex listing={listing} />
              </div>

              <div className='individual-map-container'>
                <h1 className='individual-map-title'>The neighborhood</h1>
                <IndividualMap listing={listing}/>
              </div>
            </div>

            {/* <div className='booking-form'> */}
              <BookingForm listing={listing}/>
            {/* </div> */}

          </div>
          </div>
        </div>
      )
    }

    
  }
}

export default ListingShow;
