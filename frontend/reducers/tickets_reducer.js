import {RECEIVE_ALL_TICKETS, RECEIVE_TICKET, REMOVE_EVENT} from '../actions/ticket_actions';
import merge from 'lodash/merge';


const TicketsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_TICKETS:
            return action.tickets
        case RECEIVE_TICKET:
            let newTicket = {[action.ticket.id]: action.ticket};
            return merge({}, state, newTicket);
        case REMOVE_EVENT:
            let newState = merge({}, state);
            delete newState[action.ticketId];
            return newState;
        default:
            return state;
    }
}

export default TicketsReducer;