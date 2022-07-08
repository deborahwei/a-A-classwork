class Sub < ApplicationRecord

    validates :title, :description, presence: true 

    belongs_to :moderator, 
    foreign_key: :user_id, 
    class_name: :User
end
