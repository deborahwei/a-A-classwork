Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users/:user_id/artworks', to: 'artworks#index'
  get '/users/:user_id/comments', to: 'comments#index'
  get '/users', to: 'users#index', as: 'all_users'
  get '/users/:username', to: 'users#index', as: 'find_user'
  get '/users/:id', to: 'users#show', as: 'user'
  get '/users/new', to: 'users#new', as: 'new_user'
  post '/users', to: 'users#create'
  get '/users/:id', to: 'users#edit', as: 'edit_user'
  patch '/users/:id', to: 'users#update'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  resources :artworks do 
    resources :comments, only: :index
  end

  resources :artwork_shares, :only => [:create, :destroy]

  resources :comments, :only => [:create, :destroy, :index] 
  
end
