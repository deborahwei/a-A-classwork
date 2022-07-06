class User < ApplicationRecord

    validates :email, presence: true 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end
    
    def generate_token_session
        SecureRandom::urlsafe_base64
    end

end
