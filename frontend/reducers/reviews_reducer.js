import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS: {
      return merge({}, action.reviews);
    }
    case RECEIVE_REVIEW: {
      const newState = merge({}, state);
      newState[action.review.id] = action.review;
    }
    case REMOVE_REVIEW: {
      const newState = merge({}, state);
      delete newState[action.reviewId];
    }
    case RECEIVE_LISTING: {
      const reviews = action.listing.reviews
      return merge({}, state, reviews);
    }
    default: {
      return state;
    }
  }
}

export default reviewsReducer;