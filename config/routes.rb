Rails.application.routes.draw do
  resources :videos
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do

    end
  end
end
