class PostsController < ApplicationController

    before_action :require_logged_in, only: [:new, :create]
    before_action :require_user_author, only: [:destroy, :edit, :update]

    def new 
        render :new
    end

    def create 

    end

    def edit 

    end

    def update

    end

    def show 

    end

    def destroy
        
    end

    private 

    def require_user_author
        
    end

    def post_params 
        params.require(:sub).permit(:title, :url, :content)
    end
end