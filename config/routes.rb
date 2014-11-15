Rails.application.routes.draw do
  root 'welcome#index'
  get '/articles' => 'articles#index'

  resources :tags, only: :index do
    resources :articles, only: :index
  end

end
