import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKET_ERRORS = "RECIEVE_TICKET_ERRORS"
export const REMOVE_TICKET = "REMOVE_TICKET";

const receiveTicket = ticket => ({
    type: RECEIVE_TICKET,
    ticket
});

const removeTicket = ticketId => ({
    type: REMOVE_TICKET,
    ticketId
});

const receiveTicketErrors = errors => ({
    type: RECEIVE_TICKET_ERRORS,
    errors
});

export const fetchTicket = (eventId, ticketId) => dispatch => (
    TicketApiUtil.fetchTicket(eventId, ticketId).then(
        ticket => dispatch(receiveTicket(ticket)),
        errors => dispatch(receiveTicketErrors(errors.responseJSON))
    )
);

export const createTicket = (eventId, ticket) => dispatch => (
    TicketApiUtil.createTicket(eventId, ticket).then(
        ticket => dispatch(receiveTicket(ticket)),
        errors => dispatch(receiveTicketErrors(errors.responseJSON))
    )
);

export const deleteTicket = (eventId, ticketId) => dispatch => (
    TicketApiUtil.deleteTicket(eventId, ticketId).then(
        ticket => dispatch(removeTicket(ticketId))
    )
);