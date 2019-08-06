// filterObj is now an object that looks like this
// {
//   "bounds": bounds,
//   "dates": this.dates
// }

export const fetchListings = (filterObj) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: {
      filterObj
    }
  })
}

// export const fetchListings = (bounds) => {
//   return $.ajax({
//     method: 'GET',
//     url: 'api/listings',
//     data: {
//       bounds
//     }
//   })
// }

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}