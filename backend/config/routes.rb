Rails.application.routes.draw do
  root 'static#home'
  resources :user_races
  resources :races
  resources :race_distances
  resources :users do
    resources :races, only: [:index, :show]
    resources :race_distances, only: [:index, :show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
