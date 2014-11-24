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
        puts entry
        extract = entry[:content_snippet]
        text = entry[:content]
        begin
          img_url = entry[:media_groups][0][:contents][0][:url] 
          categories = entry[:categories] || entry[:media_groups][0][:contents][0][:keywords]
          puts categories if !categories.empty?
        rescue 
          img_url = ''
        end

        unless img_url == ''
          ext = img_url.index('.jpg')
          img_url = img_url[0, ext + 4] if ext != nil
        end

        articles.push({
          publication: publication,
          title: entry[:title],
          url: entry[:link],
          date_published: entry[:published_date],
          extract: extract,
          text: text, 
          img_url: img_url
        })
      end
    end

    return articles
  end

end





