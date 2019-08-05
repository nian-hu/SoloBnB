export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_AMENITIES_MODAL = 'OPEN_AMENITIES_MODAL';

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

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}