Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do     
      resources :channels, only: [:index, :show, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show] do 
      resources :bookings, only: [:create]
      resources :reviews, only: [:create, :index]
    end
    resources :bookings, only: [:index, :show, :update, :destroy]
    resources :reviews, only: [:update, :destroy]
    get 'chatroom/:id/messages', to: 'chatroom#messages' 

    # resources :channels, only: [:create, :show, :destroy] do 
    #   resources :messages, only: [:create, :index]
    # end
  end

  mount ActionCable.server, at: '/cable'
end
