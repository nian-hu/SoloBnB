export const fetchReviews = listingId => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${listingId}/reviews`
  })
}

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: `api/listings/${review.listingId}/reviews`,
    data: {
      review
    }
  })
}

export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {
      review
    }
  })
}

export const deleteReview = review => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${review.id}`
  })
}