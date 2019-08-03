import React from 'react';
import { openAmenitiesModal } from '../../actions/modal_actions';

class ListingAmenities extends React.Component {
  constructor(props) {
  // debugger
    super(props)
  }

  render() {
    const { listing } = this.props;
    const { amenities } = this.props;

    // if (!listing.amenity_ids) return [];

    // const amenities = listing.amenity_ids.map(id => {
    //   state.entities.amenities[id]
    // })

    if (amenities.length === 0) return null;

    const icon = amenity => {
      if (amenity === undefined) return null;
      switch (amenity.name) {
        case 'Wifi': {
          return <i id='amenity-icon' className="fas fa-wifi"></i>;
        }
        case 'Air conditioning': {
          return <i id='amenity-icon' className="fas fa-snowflake"></i>;
        }
        case 'Heat': {
          return <i id='amenity-icon' className="fas fa-sun"></i>;
        } 
        case 'Laundry': {
          return <i id='amenity-icon' className="fas fa-tint"></i>;
        }
        case 'Kitchen': {
          return <i id='amenity-icon' className="fas fa-utensils"></i>;
        }
        default:
          return null;
      }
    }

    const amenityItems = amenities.map((amenity, idx) => {
      if (amenity === undefined) return null;
      return (
        <div className="amenities-item" key={idx}>
          <div className='amenity-icon-container'>
            {/* <div className='amenity-icon'>  */}
              {icon(amenity)}
            {/* </div> */}

            <div className='amenity-name'>
              {amenity.name}
            </div>
          </div>
        </div>
      )
    })

    // debugger
    
    return (
      <div className='amenities-box'>
        <h1 className='amenities-title'>Amenities</h1>
        <div className='amenities-list'>

          <div className='amenities-col1'>
            <ul className='amenities-items'>
              {amenityItems}
            </ul> 
          </div>

            <div className='amenities-col2'>
              <ul className='amenities-items'>
                {amenityItems}
              </ul> 
            </div>

        </div>
        
        <button className='amenities-show-all' onClick={() => dispatch(openAmenitiesModal('amenities', amenities))}>
          Show all amenities
        </button>
      </div>
    )
  }
}

export default ListingAmenities;