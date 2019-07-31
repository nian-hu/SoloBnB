import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING'

export const receiveAllListings = listings => {
  return {
    type: RECEIVE_ALL_LISTINGS,
    listings
  }
}

export const receiveListing = listing => {
  return {
    type: RECEIVE_LISTING,
    listing
  }
}

export const fetchListings = () => {
  return dispatch => {
    return ListingAPIUtil.fetchListings()
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

