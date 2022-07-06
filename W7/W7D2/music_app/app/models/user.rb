class User < ApplicationRecord

    attr_reader :password 
    after_initalize: :ensure_session_token

    validates :email, presence: true 
    validates :password, length: {minimum: 6}, allow_nil: true 

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

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
end
