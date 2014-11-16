Rails.application.routes.draw do
  root 'articles#index'
  get 'tags' => 'tags#index'
  get 'tags/:id/articles' => 'articles#show'
end
