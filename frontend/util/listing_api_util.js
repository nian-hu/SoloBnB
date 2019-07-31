export const fetchListings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings'
  })
}

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}