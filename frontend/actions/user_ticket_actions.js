import * as UserTicketApiUtil from '../util/user_ticket_api_util';

export const RECEIVE_ALL_USER_TICKETS = "RECEIVE_ALL_USER_TICKETS";
export const RECEIVE_USER_TICKET = "RECEIVE_USER_TICKET";
export const REMOVE_USER_TICKET = "REMOVE_USER_TICKET";
export const RECEIVE_USER_TICKET_ERRORS = "RECEIVE_USER_TICKET_ERRORS";

const receiveAllUserTickets = userTickets => ({
    type: RECEIVE_ALL_USER_TICKETS,
    userTickets
});

const receiveUserTicket = userTicket => ({
    type: RECEIVE_USER_TICKET,
    userTicket
});

const removeUserTicket = userTicketId => ({
    type: REMOVE_USER_TICKET,
    userTicketId
});

const receiveUserTicketErrors = errors => ({
    type: RECEIVE_USER_TICKET_ERRORS,
    errors
});

export const fetchAllUserTickets = () => dispatch => (
    UserTicketApiUtil.fetchAllUserTickets().then(
        userTickets => dispatch(receiveAllUserTickets(userTickets)),
        errors => dispatch(receiveUserTicketErrors(errors.responseJSON))
    )
);

export const fetchUserTicket = userTicketId => dispatch => (
    UserTicketApiUtil.fetchUserTicket(userTicketId).then(
        userTicket => dispatch(receiveUserTicket(userTicket)),
        errors => dispatch(receiveUserTicketErrors(errors.responseJSON))
    )
);

export const createUserTicket = userTicket => dispatch => (
    UserTicketApiUtil.createUserTicket(userTicket).then(
        userTicket => dispatch(receiveUserTicket(userTicket)),
        errors => dispatch(receiveUserTicketErrors(errors.responseJSON))
    )
);

export const deleteUserTicket = userTicketId => dispatch => (
    UserTicketApiUtil.deleteUserTicket(userTicketId).then(
        userTicket => dispatch(removeUserTicket(userTicketId)),
        errors => dispatch(receiveUserTicketErrors(errors.responseJSON))
    )
);