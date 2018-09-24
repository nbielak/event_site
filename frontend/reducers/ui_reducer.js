import { combineReducers } from 'redux';
import ModalReducer from './modals_reducer';

export default combineReducers({
    modal: ModalReducer
})