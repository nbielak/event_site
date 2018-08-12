import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';


const currentUserReducer = (state=null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser.id;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUserReducer;
