class SubsController < ApplicationController 

    before_action :require_user_moderator, only: [:edit, :update]
    before_action :require_logged_in, only: [:new, :create]

    def new 
        @sub = Sub.new
    end

    def create 
        @sub = current_user.subs.new(sub_params)
        if @sub.save 
            redirect_to sub_url(@sub)
        else 
            render :new
        end
    end

    def edit
        @sub = Sub.find(params[:id])
    end

    def update
        @sub = Sub.find(params[:id])
        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else 
            render :edit
        end
    end

    def show 
        @sub = Sub.find(params[:id])
    end

    def index 
        @subs = Sub.all
        render :index
    end

    private 

    def require_user_moderator
        return if current_user.subs.find_by(id: params[:id])
    end

    def sub_params 
        params.require(:sub).permit(:title, :description)
    end
end