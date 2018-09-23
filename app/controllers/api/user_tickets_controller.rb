class Api::UserTicketsController < ApplicationController
    before_action :logged_in?

    def index
    end

    def create
        @user_ticket = UserTicket.new(user_ticket_params)
        if @user_ticket.save
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
end
