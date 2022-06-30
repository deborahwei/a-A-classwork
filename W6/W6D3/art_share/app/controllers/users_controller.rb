class UsersController < ApplicationController

    def index
        if params.has_key?(:username)
            @user = User.find_by_username(params[:username])
        else 
            @user = User.all 
        end
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            render json: @user
        else 
            render json: @user.errors.full_message, status: :unprocessable_entity
        end
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end
    
    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            # redirect_to user_url(@user)
            render json: @user
        else
            render json: @user.errors.full_message, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy

    end

    private 

    def user_params 
        params.require(:user).permit(:username)
    end
    

end 
