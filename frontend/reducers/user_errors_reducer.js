import {RECEIVE_USER_ERRORS, RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const userErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return state;
    default:
      return state;
  }
}

export default userErrorsReducer;
