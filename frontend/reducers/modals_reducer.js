import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const ModalReducer = (state={}, action) => {
    Object.freeze(state);
    console.log("you are in the reducer");
    switch(action.type) {
        case OPEN_MODAL:
            return merge({}, state, {modal: action.modal, eventId: action.eventId})
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
}

export default ModalReducer;