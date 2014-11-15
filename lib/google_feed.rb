require 'open-uri'

module GoogleFeed

  def self.fetch_articles(feeds)
    # Fetch articles from an array of rss feed urls
    GoogleAjax.api_key = 'AIzaSyBiCL446e7JMaa8tTTtMcatRnkqBhN2Fzg'
    GoogleAjax.referer = 'http://time-back.herokuapp.com'
    articles = []

    feeds.each do |feed|
      feed_content = GoogleAjax::Feed.load(URI::encode(feed[:url]), {num: 10})
      publication = feed[:publication]

      feed_content[:entries].each do |entry|
        extract = entry[:content] || entry[:content_snippet]
        articles.push({
          publication: publication,
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





