class TagsController < ApplicationController

  def index
    tags = Tag.all
    respond_to do |format|
      format.json { render json: tags.to_json }
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
