require 'open-uri'

module GoogleFeed

  def self.fetch_articles(feed_urls)
    # Fetch articles from an array of rss feed urls
    GoogleAjax.api_key = 'AIzaSyBiCL446e7JMaa8tTTtMcatRnkqBhN2Fzg'
    GoogleAjax.referer = 'http://time-back.herokuapp.com'
    articles = []

    feed_urls.each do |feed_url|
      feed = GoogleAjax::Feed.load(URI::encode(feed_url), {num: 5})
      publisher = feed[:description]

      feed[:entries].each do |entry|
        if entry[:content].length > 500
          extract = entry[:content_snippet]
        else
          extract = entry[:content]
        end
        articles.push({
          publisher: publisher,
          title: entry[:title],
          url: entry[:link],
          date_published: entry[:published_date],
          extract: extract
        })
      end
    end

    return articles
  end

end





