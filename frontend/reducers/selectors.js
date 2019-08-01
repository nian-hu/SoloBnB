export const selectAmenities = (state, listingId) => {
  if (listingId === undefined) return [];
  //this line below kind of fixed it?
  if (state.entities.listings[listingId] === undefined) return [];
  //
  if (!state.entities.listings[listingId].amenity_ids) return [];
  // if (!listing.amenity_ids) return [];
  // debugger
  return state.entities.listings[listingId].amenity_ids.map(id => {
    // debugger
    return state.entities.amenities[id];
  })
}

// [{id: 1, name:'wifi'}]