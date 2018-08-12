import currentUserReducer from './current_user_reducer';
import lookUpReducer from './look_up_reducer';
import {combineReducers} from 'redux'

const sessionReducer = combineReducers({
  currentUser: currentUserReducer,
  lookUp: lookUpReducer
});

export default sessionReducer;
