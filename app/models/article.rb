class Article < ActiveRecord::Base

  def feeds
    feeds = ['http://time.com/newsfeed/feed/',
      'http://rss.cnn.com/rss/money_latest.rss'
    ]
  end

end
