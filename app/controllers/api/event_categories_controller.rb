class Api::EventCategoriesController < ApplicationController

    def index
        @event_categories = EventCategory.all
    end

    def show
        @event_category = EventCategory.find(params[:id])
    end

    def create
        @event_category = EventCategory.new(event_category_params)
        if @event_category.save
            render 'api/event_categories/show'
        else 
            render json: @event_category.errors.full_messages, status: 401
        end
    end

    def update
        @event_category = EventCategory.find_by(event_id: params[:event_category][:event_id])
        if @event_category.update_attributes(event_category_params)
            render 'api/event_categories/show'
        else
            render json: @event_category.errors.full_messages, status: 401
        end
    end

    private

    def event_category_params
        params.require(:event_category).permit(:event_id, :category_id)
    end
end
