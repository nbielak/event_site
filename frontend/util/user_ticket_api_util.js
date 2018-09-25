export const fetchAllUserTickets = () => (
    $.ajax ({
        method: 'GET',
        url: '/api/user_tickets'
    })
);

export const fetchUserTicket = userTicketId => (
    $.ajax ({
        method: 'GET',
        url: `/api/user_tickets/${userTicketId}`,
        data: { userTicketId } 
    })
);

export const createUserTicket = userTicket => (
    $.ajax ({
        method: 'POST',
        url: '/api/user_tickets',
        data: { userTicket }
    })
);

export const deleteUserTicket = userTicketId => (
    $.ajax ({
        method: `DELETE`,
        url: `/api/user_tickets/${userTicketId}`
    })
)