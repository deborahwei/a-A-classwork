class CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save!
            render json: @comment
        else 
            render json: @comment.errors.full_message, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    def index

        if params.has_key?(:user_id)
            @parent = User.find(params[:user_id])
        elsif params.has_key?(:artwork_id)
            @parent = Artwork.find(params[:artwork_id])
        end

        render json: @parent.comments
    end

    private 

    def comment_params
        params.require(:comment).permit(:user_id, :body, :artwork_id)
    end
end