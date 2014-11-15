require "#{Rails.root}/lib/google_feed"

class Article < ActiveRecord::Base
  has_and_belongs_to_many :tags

  def self.aggregate
    feeds = Article.feeds
    GoogleFeed.fetch_articles(feeds)
  end

  def self.feeds
    feeds = [
      { url: 'http://time.com/newsfeed/feed/',
        publication: 'Time Magazine'
      },
      { url: 'http://rss.cnn.com/rss/money_latest.rss',
        publication: 'Fortune'
      },
      { url: 'http://feeds.people.com/people/headlines',
        publication: 'People'
      },
      { url: 'http://feeds.ew.com/entertainmentweekly/latest',
        publication: 'Entertainment Weekly'
      }
    ]
  end

end
