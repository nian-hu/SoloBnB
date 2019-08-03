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
  debugger
  const pojo = {
    type: OPEN_AMENITIES_MODAL,
    modal,
    amenities
  }
  debugger
  return pojo;
  // this action is never being dispatched...?
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}