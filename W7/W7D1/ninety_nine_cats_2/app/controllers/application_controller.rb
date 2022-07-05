class ApplicationController < ActionController::Base

    helper_method :current_user
    
    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in? 
        !!current_user 
    end

    def require_logged_in
        redirect_to new_sesssions_url unless logged_in? 
    end
end
