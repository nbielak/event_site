@user_tickets.each do |user_ticket|
    json.set! user_ticket.id do 
        json.partial! 'user_ticket', user_ticket: user_ticket
    end
end