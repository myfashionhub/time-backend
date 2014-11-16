Rails.application.routes.draw do
  root 'articles#index'
  get 'tags/:id/articles' => 'articles#show'
  get 'tags' => 'tags#index'
end
