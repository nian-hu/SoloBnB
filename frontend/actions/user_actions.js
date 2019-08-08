import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = userId => {
  return dispatch => {
    return UserAPIUtil.fetchUser(userId)
      .then(user => {
        return dispatch(receiveUser(user))
      })
  }
}