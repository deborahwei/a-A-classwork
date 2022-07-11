class PostsController < ApplicationController

    before_action :require_logged_in, only: [:new, :create]
    before_action :require_user_author, only: [:destroy, :edit, :update]

    def new 
        @post = Post.new
        render :new
    end

    def create 
        @post = Post.new(post_params)
        if @post.save 
            redirect_to post_url(@post)
        else 
            flash[:errors] = @post.errors.full_messages
        end
    end

    def edit 
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            redirect_to post_url(@post)
        else 
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    def show 
        @post = Post.find(params[:id])
    end

    def destroy
        @post = Post.find(params[:id])
        @post.delete
    end

    private 

    def require_user_author
        current_user.id == @post.author_id
    end

    def post_params 
        params.require(:sub).permit(:title, :url, :content, sub_ids:[], :user_id)
    end
end