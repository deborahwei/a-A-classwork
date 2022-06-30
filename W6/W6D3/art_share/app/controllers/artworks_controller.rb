class ArtworksController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        @owned_artworks = @user.artworks
        @shared_with_artworks = @user.shared_artworks
        render json: [@owned_artworks, @shared_with_artworks]
    end

    def create
        @artwork = Artwork.new(artwork_params)
        if @artwork.save!
            render json: @artwork
        else 
            render json: @artwork.errors.full_message, status: :unprocessable_entity
        end
    end

    def show
        @artwork = Artwork.find(params[:id])
        render json: @artwork
    end
    
    def update
        @artwork = Artwork.find(params[:id])
        if @artwork.update(artwork_params)
            # redirect_to artwork_url(@artwork)
            render json: @artwork
        else
            render json: @artwork.errors.full_message, status: :unprocessable_entity
        end
    end

    def destroy
        @artwork = Artwork.find(params[:id])
        @artwork.destroy

    end

    private 

    def artwork_params 
        params.require(:artwork).permit(:title, :artist_id, :image_url)
    end
    
end