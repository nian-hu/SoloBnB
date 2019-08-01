import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING'

export const receiveAllListings = listings => {
  return {
    type: RECEIVE_ALL_LISTINGS,
    listings
  }
}

export const receiveListing = payload => {
  return {
    type: RECEIVE_LISTING,
    listing: payload.listing,
    amenities: payload.amenities
  }
}

export const fetchListings = (filters) => {
  return dispatch => {
    return ListingAPIUtil.fetchListings(filters)
      .then(listings => {
        return dispatch(receiveAllListings(listings))
      })
  }
}

export const fetchListing = id => {
  return dispatch => {
    return ListingAPIUtil.fetchListing(id)
      .then(listing => {
        return dispatch(receiveListing(listing))
      })
  }
}

