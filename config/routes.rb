Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show] do 
      resources :bookings, only: [:create]
      resources :reviews, only: [:create, :index]
    end
    resources :bookings, only: [:index, :show, :update, :destroy]
    resources :reviews, only: [:update, :destroy]
  end
end
