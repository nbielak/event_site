import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const ModalReducer = (state=null, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_MODAL:
            return merge({}, state, {modal: action.modal, eventId: action.eventId})
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default ModalReducer;