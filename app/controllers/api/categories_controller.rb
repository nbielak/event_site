class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all 
    end

    def show
        @category = Category.find(params[:id])
    end

    def create
        @category = Category.new(category_params)
        if @category.save
            render 'api/categories/show'
        else
            render json: @category.errors.full_messages, status: 401
        end
    end

    def category_events
        @category = Category.find_by(name: params[:name].capitalize)
        @events = @category.events
        if @events
            render 'api/categories/show'
        else
            render json: @events.errors.full_messages, status: 401
        end
    end

    private

    def category_params
      params.require(:category).permit(:name, :description)
    end
end
