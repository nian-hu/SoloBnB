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

    const amenityItems = amenities.map(amenity => {
      return (
        <li key={amenity.id}>
          {amenity.name}
        </li>
      )
    })

    // debugger
    
    return (
      <div className='amenities-box'>
        <ul>
          {amenityItems}
        </ul> 
      </div>
    )
  }
}

export default ListingAmenities;