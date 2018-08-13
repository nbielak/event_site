class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def sign_in
    unless confirm_email(params[:email])
      render json: ["Please enter a valid email address."], status: 401
    else
      @user = User.find_by_email(params[:email])
      found = nil
      if @user
        render json: {found: "found", email: params[:email]}
      else
        render json: {found: "not found", email: params[:email]}
      end
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      redirect_to "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
