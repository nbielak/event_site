import {RECEIVE_ALL_USER_TICKETS, 
    RECEIVE_USER_TICKET, 
    RECEIVE_USER_TICKET_ERRORS} from '../actions/user_ticket_actions';

const UserTicketErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER_TICKET_ERRORS: 
            return action.errors;
        case RECEIVE_USER_TICKET:
            return [];
        case RECEIVE_ALL_USER_TICKETS:
            return [];
        default:
            return state;
    }
}

export default UserTicketErrorsReducer;