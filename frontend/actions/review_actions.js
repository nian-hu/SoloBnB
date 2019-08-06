import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const removeReview = review => {
  return {
    type: REMOVE_REVIEW,
    reviewId: review.id
  }
}

export const fetchReviews = listingId => {
  return dispatch => {
    return ReviewAPIUtil.fetchReviews(listingId)
      .then(reviews => {
        return dispatch(receiveAllReviews(reviews))
      })
  }
}

export const createReview = review => {
  return dispatch => {
    return ReviewAPIUtil.createReview(review)
      .then(review => {
        return dispatch(receiveReview(review))
      })
  }
}

export const updateReview = review => {
  return dispatch => {
    return ReviewAPIUtil.updateReview(review)
      .then(review => {
        return dispatch(receiveReview(review))
      })
  }
}

export const deleteReview = review => {
  return dispatch => {
    return ReviewAPIUtil.deleteReview(review)
      .then(review => {
        return dispatch(removeReview(review))
      })
  }
}