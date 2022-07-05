class UsersController < ApplicationController
    def new 
        render :new 
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
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