class Article < ActiveRecord::Base
  has_and_belongs_to_many :tags

  def feeds
    feeds = ['http://time.com/newsfeed/feed/',
      'http://rss.cnn.com/rss/money_latest.rss'
    ]
  end

end
