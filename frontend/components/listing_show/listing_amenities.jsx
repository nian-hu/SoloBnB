//this component has "listing" in props
// my listing has array of amenities ids!!!!

// in here we would loop over the amenity_ids 
// we grab the actual amenity from amenity slice of state

// amenity reducer

// reducer that listens for receive_listing?

// amenities reducer listening for RECEIVE_LISTING

// export const selectAmenities = (state, listingId) => {
//   if (listingId === undefined) return [];
//   if (!state.entities.listings[listingId].amenity_ids) return [];
//   return state.entities.listings[listingId].amenity_ids.map(id => {
//     state.entities.amenities[id];
//   })
// }


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

    debugger
    
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