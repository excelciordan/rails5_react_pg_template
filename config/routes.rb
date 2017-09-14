Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :items, only: [:create, :update, :destroy, :index]
    end
  end

  get 'home/index'
  root 'home#index'
end