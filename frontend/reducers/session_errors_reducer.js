import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_FOUND} from '../actions/session_actions';
import merge from 'lodash/merge';



const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_FOUND:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
