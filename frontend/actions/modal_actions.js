export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_AMENITIES_MODAL = 'OPEN_AMENITIES_MODAL';
export const OPEN_REVIEW_MODAL = 'OPEN_REVIEW_MODAL';
export const OPEN_MESSAGE_MODAL = 'OPEN_MESSAGE_MODAL';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  }
}

export const openAmenitiesModal = (modal, amenities) => {
  return {
    type: OPEN_AMENITIES_MODAL,
    modal,
    amenities
  }
}

export const openReviewModal = (modal, listingId) => {
  return {
    type: OPEN_REVIEW_MODAL,
    modal,
    listingId
  }
}

export const openMessageModal = (modal, userId) => {
  return {
    type: OPEN_MESSAGE_MODAL,
    modal,
    userId
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}