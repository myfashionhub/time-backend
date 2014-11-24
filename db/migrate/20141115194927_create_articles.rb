class CreateArticles < ActiveRecord::Migration
  def up
    create_table :articles do |t|
      t.text :url
      t.string :title
      t.string :publication
      t.text :extract
      t.text :text
      t.string :img_url
      t.string :date

      t.timestamps
    end
  end

  def down
    drop_table :articles
  end
end
