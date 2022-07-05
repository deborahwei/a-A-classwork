class UsersController < ApplicationController
    
    before action :require_logged_in, only: [:index, :show]

    def new 
        render :new 
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            redirect_to user_url(@user)
        else
            render json: @user.errors.full_messages,  status: :unprocessable_entity
        end
    end

    private 

    def user_params 
        params.require(:user).permit(:username, :session_token, :password_digest, :password)
    end
end