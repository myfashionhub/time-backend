class ArticlesController < ApplicationController

  def index
    articles = Article.aggregate
    render json: articles.to_json
  end

end
