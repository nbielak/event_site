import { RECEIVE_FOUND } from '../actions/session_actions';
import merge from 'lodash/merge';


const lookUpReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOUND:
      return merge({}, state, action.found);
    default:
      return state;
  }
};

export default lookUpReducer;
