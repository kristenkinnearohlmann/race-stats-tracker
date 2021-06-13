Rails.application.routes.draw do
  resources :user_races
  resources :races
  resources :race_distances
  resources :users do
    resources :races, only: [:index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
