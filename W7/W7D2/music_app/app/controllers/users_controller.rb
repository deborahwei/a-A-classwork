class UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user
            login(@user)
            redirect_to user_url(@user)
        else 
            render json: @user.errors.full_messages,  status: :unprocessable_entity
        end
    end

    def new
        render :new 
    end

    def show 
        @user = User.find(params[:id])
        render :show
    end

    private 

    def user_params 
        params.require(:user).permit(:email, :password)
    end
end