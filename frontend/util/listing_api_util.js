export const fetchListings = (bounds) => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: {
      bounds
    }
  })
}

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}