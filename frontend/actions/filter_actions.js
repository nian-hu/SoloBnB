import { fetchListings } from '../actions/listing_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
}

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  }
}

// filterObj is now an object that looks like this
// {
//   "bounds": bounds,
//   "dates": this.dates
// }

export const updateFilter = (filterObj) => {
  // debugger
  return (dispatch, getState) => {
    Object.keys(filterObj).forEach(filter => {
      dispatch(changeFilter(filter, filterObj[filter]));
    })
    return fetchListings(getState().ui.filter)(dispatch);
  }
}


// ORIGINAL ONE
// export const updateFilter = (filter, value) => {
//   return (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return fetchListings(getState().ui.filter.bounds)(dispatch);
//   }
// }

// export const removeFilter = () => {
//   return (dispatch, getState) => {
//     dispatch(clearFilter());
//     return fetchListings(getState().ui.filter)(dispatch);
//   }
// }