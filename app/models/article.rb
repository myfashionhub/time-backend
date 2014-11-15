require "#{Rails.root}/lib/google_feed"

class Article < ActiveRecord::Base
  has_and_belongs_to_many :tags

  def self.aggregate
    feed_urls = Article.feeds
    GoogleFeed.fetch_articles(feed_urls)
  end

  def self.feeds
    feed_urls = ['http://time.com/newsfeed/feed/',
      'http://rss.cnn.com/rss/money_latest.rss'
    ]
  end

end
