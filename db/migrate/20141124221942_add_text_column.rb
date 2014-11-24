class AddTextColumn < ActiveRecord::Migration
  def change
    add_column :articles, :text, :text
  end
end
