export const fetchAllTickets = eventId => (
    $.ajax({
        method: 'GET',
        url: `/api/events/${eventId}/tickets`
    })
);

export const fetchTicket = (eventId, id) => (
    $.ajax ({
        method: 'GET',
        url: `/api/events/${eventId}/tickets/${id}`,
        data: { id }
    })
);

export const createTicket = (eventId, ticket) => (
    $.ajax ({
        method: `POST`,
        url: `/api/events/${eventId}/tickets`,
        data: { ticket }
    })
);

export const updateTicket = (eventId, ticket) => (
    $.ajax ({
        method: PATCH,
        url: `/api/events/${eventId}tickets/${ticket.id}`,
        data: { ticket }
    })
);

export const deleteTicket = id => (
    $.ajax ({
        method: 'DELETE',
        url: `api/events/${eventId}tickets/${id}`
    })
);