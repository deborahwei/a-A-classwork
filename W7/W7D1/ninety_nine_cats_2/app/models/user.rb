class User < ApplicationRecord 
    
    after_initialize :ensure_session_token
    attr_reader :password

    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :cats,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cat

    has_many :cat_rental_requests,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :CatRentalRequest

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password    
        self.password_digest = BCrypt::Password.create(password) 
    end

    def is_password(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password(password)
            user
        else 
            nil 
        end
    end
end