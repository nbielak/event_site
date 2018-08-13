Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users
    get '/email', to: 'users#sign_in', as: 'user_sign_in'
    resource :session, only: [:create, :destroy]
    resources :events
  end
end
