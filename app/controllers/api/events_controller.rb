class Api::EventsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id

    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params)
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    @events = Event.all
    render 'api/events/index'
  end

  private

  def event_params
    params.require(:event).permit(:title,
      :description,
      :venue_name,
      :address,
      :address2,
      :city,
      :state,
      :country,
      :zip,
      :start_date,
      :end_date,
      :start_time,
      :end_time,
      :user_id,
      :organizer_name,
      :organizer_description)
  end
end
