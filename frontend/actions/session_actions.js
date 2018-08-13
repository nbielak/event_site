import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_FOUND = "RECEIVE_FOUND";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveFound = (found) => ({
  type: RECEIVE_FOUND,
  found
});



export const login = currentUser => dispatch => (
  SessionApiUtil.login(currentUser).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const signup = currentUser => dispatch => (
  SessionApiUtil.signup(currentUser).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const lookUpUser = email => dispatch => {
  return (SessionApiUtil.lookUpUser(email).then(
    found => dispatch(receiveFound(found)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  ));
};
