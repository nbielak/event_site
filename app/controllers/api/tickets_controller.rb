class Api::TicketsController < ApplicationController
    before_action :require_login

    def index 
        @ticket = Ticket.find_by(event_id: params[:event_id])
        render 'api/tickets/show'
    end
    def show
        @ticket = Ticket.find(params[:id])
        render 'api/tickets/show'
    end

    def create
        @ticket = Ticket.new(ticket_params)
        if @ticket.save
            render 'api/tickets/show'
        else
            render json: @ticket.errors.full_messages, status: 401
        end
    end

    def update
        @ticket = Tickets.find_by(event_id: params[:event_id])

        if @ticket.update_attributes(ticket_params)
            render 'api/tickets/show'
        else 
            render json: @ticket.errors.full_messages, status: 401
        end
    end

    def destroy
        @ticket = Ticket.find(params[:id])
        @ticket.destroy 
    end

    private

    def ticket_params
        params.require(:ticket).permit(:name, :event_id, :price, :quantity)
    end

end
