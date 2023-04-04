Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  get 'home/login'
  get 'home/signup'

  post "/login", to: 'sessions#create'
  post "/logout", to: 'sessions#destroy'
  get "/logged_in", to: 'sessions#is_logged_in?'
  post "/signup", to: 'users#create'

  root to: 'home#index'
  get "/videos", to: "home#videos"
  get "/books", to: "home#books"
  get "/games", to: "home#games"
  get "/welcome", to: "home#welcome"

  resources :users, only: [:create, :show, :index]
  namespace :api do
    namespace :v1 do
      resources :videos
      resources :books
      resources :games
    end
  end
end
