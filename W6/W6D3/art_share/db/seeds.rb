# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    User.destroy_all

    user_1 = User.create!(username: 'Deborah')
    user_2 = User.create!(username: 'Carlos')
    user_3 = User.create!(username: 'Leon')
    user_4 = User.create!(username: 'Lobster')
    user_5 = User.create!(username: 'Picasso')
    
    Artwork.destroy_all

    artwork_1 = Artwork.create!(title: 'Mona Lisa', image_url: "", artist_id: user_1.id)
    artwork_2 = Artwork.create!(title: 'Saturn Devouring his Child', image_url: "" , artist_id: user_2.id)
    artwork_3 = Artwork.create!(title: 'Abstract #6', image_url: "", artist_id: user_3.id)

    ArtworkShare.destroy_all
   
    ArtworkShare.create!(artwork_id: artwork_1.id, viewer_id: user_2.id)
    ArtworkShare.create!(artwork_id: artwork_1.id, viewer_id: user_3.id)
    ArtworkShare.create!(artwork_id: artwork_2.id, viewer_id: user_1.id)
    ArtworkShare.create!(artwork_id: artwork_2.id, viewer_id: user_3.id)
    ArtworkShare.create!(artwork_id: artwork_3.id, viewer_id: user_2.id)

    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    
end 
