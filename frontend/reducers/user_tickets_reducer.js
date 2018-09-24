import {RECEIVE_ALL_USER_TICKETS, 
    RECEIVE_USER_TICKET, 
    REMOVE_USER_TICKET} from '../actions/user_ticket_actions';
import merge from 'lodash/merge';

const UserTicketsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_USER_TICKETS:
            return action.userTickets
        case RECEVE_USER_TICKET:
            let newUserTicket = {[action.userTicket.id]: action.userTicket}
            return merge({}, state, newUserTicket);
        case REMOVE_USER_TICKET:
            let newState = merge({}, state);
            delete newState[action.userTicketId];
            return newState;
        default:
            return state;
    }
}

export default UserTicketsReducer;