class ArticlesController < ApplicationController
  def index
    articles = Article.aggregate
    render json: articles.to_json
  end

  def show
    @tag = Tag.find(params[:id])
    articles = @tag.articles.take(10)
    render json: articles.to_json
  end

  private

  def article_params
    params.require(:article).permit(:title, :url, :extract, :date, :publication)
  end
end
