import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const login = user => {
  return dispatch => {
    return SessionAPIUtil.login(user)
      .then(currentUser => {
        return dispatch(receiveCurrentUser(currentUser))
      })
  }
}

export const logout = () => {
  return dispatch => {
    return SessionAPIUtil.logout()
      .then(() => {
        return dispatch(logoutCurrentUser())
      })
  }
}

export const signup = user => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then(currentUser => {
        return dispatch(receiveCurrentUser(currentUser))
      })
  }
}
