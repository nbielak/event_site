export const fetchTicket = id => (
    $.ajax ({
        method: 'GET',
        url: `/api/tickets/${id}`,
        data: { id }
    })
)

export const createTicket = ticket => (
    $.ajax ({
        method: `POST`,
        url: '/api/tickets',
        data: { ticket }
    })
);

export const updateTicket = ticket => (
    $.ajax ({
        method: PATCH,
        url: `/api/tickets/${ticket.id}`,
        data: { ticket }
    })
);

export const deleteTicket = id => (
    $.ajax ({
        method: 'DELETE',
        url: `api/tickets/${id}`
    })
);