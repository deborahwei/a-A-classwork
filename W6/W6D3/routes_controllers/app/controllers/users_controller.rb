class UsersController < ApplicationController

    def index
        @users = User.all 
        render json: @users
    end

    def create
        # debugger
        @user = User.new(user_params)
        if @user.save!
            render json: @user
        else 
            render json: @user.errors.full_message, status: :unprocessable_entity
        end
    end

    def show
        @user = User.find(user_params[:id])
        render json: @user
    end
    
    def user_params 
        params.require(:user).permit(:name, :email)
    end
    
    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        if @user.save
            redirect_to user_url(@user)
        else
            render json: @user.errors.full_message, status: :unprocessable_entity
        end
    end

    def delete
        debugger
        @user = User.find(params[:id])
        @user.destroy

    end

end 
