import React from 'react';

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

    // debugger

    const icon = amenity => {
      switch (amenity.name) {
        case 'Wifi': {
          return <i className="fas fa-wifi"></i>;
        }
        case 'Air conditioning': {
          return <i className="fas fa-snowflake"></i>;
        }
        case 'Heat': {
          return <i className="fas fa-sun"></i>;
        } 
        case 'Laundry': {
          return <i className="fas fa-tint"></i>;
        }
        case 'Kitchen': {
          return <i className="fas fa-utensils"></i>;
        }
        default:
          return null;
      }
    }

    const amenityItems = amenities.map(amenity => {
      return (
        <li className="amenities-item" key={amenity.id}>
          <div className='amenity-icon-container'>
            <div className='amenity-icon'> 
              {icon(amenity)}
            </div>

            <div className='amenity-name'>
              {amenity.name}
            </div>
          </div>
        </li>
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
      </div>
    )
  }
}

export default ListingAmenities;