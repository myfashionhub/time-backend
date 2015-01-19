require "#{Rails.root}/lib/google_feed"

class Article < ActiveRecord::Base
  #validates_uniqueness_of :url
  has_and_belongs_to_many :tags

  def self.aggregate
    feeds = Article.feeds
    articles = GoogleFeed.fetch_articles(feeds)

    articles.each do |article|
      if article[:img_url] != nil && article[:categories] != nil
        new_article = Article.find_or_create_by(
          url: article[:url], 
          title: article[:title], 
          extract: article[:extract], 
          text: article[:text], 
          publication: article[:publication], 
          img_url: article[:img_url], 
          date: article[:date_published]
        )

        tag = Tag.find_by(name: article[:categories][0].capitalize)
        tag.articles << new_article unless tag == nil
      end
    end
  end

  def self.feeds
    feeds = [
      # { url: 'http://time.com/newsfeed/feed/',
      #   publication: 'Time Magazine'
      # },
      { url: 'http://feeds2.feedburner.com/time/world',
        publication: 'Time Magazine',
        categories: ['news']  
      },
      { url: 'http://time.com/politics/feed/',
        publication: 'Time Magazine',
        categories: ['politics'] 
      },  
      { url: 'http://feeds2.feedburner.com/timeblogs/globalspin',
        publication: 'Time Magazine',
        categories: ['politics'] 
      },   
      { url: 'http://time.com/tech/feed/',
        publication: 'Time Magazine',
        categories: ['technology'] 
      },              
      { url: 'http://time.com/business/feed/',
        publication: 'Time Magazine',
        categories: ['business'] 
      }, 
      { url: 'http://feeds2.feedburner.com/timeblogs/curious_capitalist',
        publication: 'Time Magazine',
        categories: ['business'] 
      },      
      { url: 'http://time.com/health/feed/',
        publication: 'Time Magazine',
        categories: ['health'] 
      }, 
      { url: 'http://feeds2.feedburner.com/time/travel',
        publication: 'Time Magazine',
        categories: ['travel'] 
      }, 
      { url: 'http://feeds2.feedburner.com/time/10questions',
        publication: 'Time Magazine',
        categories: ['lifestyle'] 
      },

      { url: 'http://fortune.com/feed/',
        publication: 'Fortune',
        categories: ['business']
      },
      { url: 'http://feeds.people.com/people/headlines',
        publication: 'People',
        categories: 'news'
      }, 
      { url: 'http://feeds.feedburner.com/people/stylewatch/offtherack',
        publication: 'People', 
        categories: ['fashion']
      },
      { url: 'http://rss.people.com/web/people/rss/tvwatch/index.xml',
        publication: 'People', 
        categories: ['entertainment']
      },
      { url: 'http://feeds.ew.com/entertainmentweekly/music-mix',
        publication: 'Entertainment Weekly',
        categories: ['art']        
      },      
      { url: 'http://rss.ew.com/web/ew/rss/media/tv/index.xml',
        publication: 'Entertainment Weekly',
        categories: ['entertainment']        
      },      
      { url: 'http://feeds.ew.com/entertainmentweekly/shelf-life',
        publication: 'Entertainment Weekly',
        categories: ['art']        
      }            
    ]
  end

end
