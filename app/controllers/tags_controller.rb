class TagsController < ApplicationController

  def index
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end