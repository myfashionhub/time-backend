Rails.application.routes.draw do
  root 'welcome#index'
  get '/articles' => 'articles#index'
end