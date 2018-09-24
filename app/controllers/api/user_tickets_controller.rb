class Api::UserTicketsController < ApplicationController
    before_action :set_ticket, :logged_in?
    before_action :check_ticket_quantity, only: [:create]

    def index
        @user_tickets = UserTicket.all
        render 'api/user_tickets/index'
    end

    def show
        @user_ticket = UserTicket.find(params[:id])
        render 'api/user_ticket/show'
    end

    def create
        @user_ticket = UserTicket.new(user_ticket_params)
        if @user_ticket.save
            decrement_ticket(@user_ticket)
            render 'api/user_tickets/show'
        else
            render json: @user_ticket.errors.full_messages, status: 401
        end
    end

    def destroy
        @user_ticket = UserTicket.find(params[:id]);
        @user_ticket.destroy
    end

    private

    def user_ticket_params
        params.require(:user_ticket).permit(:ticket_id, :user_id)
    end

    def decrement_ticket(user_ticket)
        @ticket.update_ticket_quantity!
    end

    def check_ticket_quantity
        return @ticket.quantity > 0 ? true : false
    end

    def set_ticket
        @ticket = Ticket.find(params[:user_ticket][:ticket_id])
    end
end
