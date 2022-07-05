class SessionsController < ApplicationController
   
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by(params[:users][:user])
    end

end