Rails.application.routes.draw do
  get 'articles' => 'articles#index'
  get 'tags' => 'tags#index'
  get 'tags/:id/articles' => 'articles#show'
end
