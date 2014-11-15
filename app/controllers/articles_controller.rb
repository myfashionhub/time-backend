class ArticlesController < ApplicationController
  def index
    articles = Article.aggregate
    render json: articles.to_json
  end

  private

  def article_params
    params.require(:article).permit(:title, :url, :extract, :date, :publication)
  end
end
