class User < ApplicationRecord

    attr_reader :password 
    after_initialize :ensure_session_token

    validates :username, :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 

    has_many :subs, 
    foreign_key: :moderator_id, 
    class_name: :Sub

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else 
            return nil
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
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token 
        self.session_token ||= generate_token_session
    end

    def reset_session_token 
        self.session_token = generate_token_session
        self.save 
        self.session_token
    end


end
