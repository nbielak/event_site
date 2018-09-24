import {RECEIVE_TICKET, RECEIVE_TICKET_ERRORS} from '../actions/ticket_actions';

const TicketErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type) {
        case RECEIVE_TICKET_ERRORS:
            return action.errors;
        case RECEIVE_TICKET:
            return [];
        default:
            return state;
    }
}

export default TicketErrorsReducer;
