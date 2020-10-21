Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    # resources :portfolios, only: [:show]
    resources :stocks, param: :symbol, only: [:show, :index, :create]
    resources :news, only:[:index]
    resources :transactions, only:[:index, :show, :create, :update, :destroy]
    resources :watchlists, only:[:index, :show, :create, :destroy]

  end
  root "static_pages#root"
end