Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users
    get '/email', to: 'users#sign_in', as: 'user_sign_in'
    resource :session, only: [:create, :destroy]
    resources :events do 
      resources :tickets
    end
    get 'users/:user_id/events', to: 'events#user_events', as: 'user_events'
    resources :user_tickets, only: [:index, :show, :create, :destroy]
    get 'users/:user_id/user_tickets/:ticket_id', to: 'user_tickets#attending_count', as: 'user_profile_tickets'
  end
end
