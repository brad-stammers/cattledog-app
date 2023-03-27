Rails.application.routes.draw do
  root to: 'home#index'
  get "/videos", to: "home#videos"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :videos
    end
  end
end
