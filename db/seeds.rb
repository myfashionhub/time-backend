tags = [
  {name: 'Art'},
  {name: 'Fashion'},
  {name: 'Business'},
  {name: 'Technology'},
  {name: 'Science'},
  {name: 'News'},
  {name: 'Lifestyle'},
  {name: 'Sports'},
  {name: 'Politics'},
  {name: 'Entertainment'},
  {name: 'Health'},
  {name: 'Food'},
  {name: 'Travel'}
]

tags.each do |tag|
  Tag.find_or_create_by({name: tag[:name]})
end


articles = Article.aggregate
articles.each do |article|
  Article.find_or_create_by({
    url: article[:url],
    title: article[:title],
    publication: article[:publication],
    extract: article[:extract],
    text: article[:text],
    img_url: article[:img_url],
    date: article[:date_published]
  })

  # Update existing articles
  current_article = Article.find_by(url: article[:url])
  current_article.update({
    title: article[:title],
    publication: article[:publication],
    extract: article[:extract],
    text: article[:text],
    img_url: article[:img_url],
    date: article[:date_published]
  })

  Tag.all.each do |tag|
    if tag.name.downcase === article[:categories][0]
      unless tag.articles.include?(current_article)
        tag.articles << current_article
      end
    end
  end
end

# Dedupe articles in tags
# Tag.all.each do |tag|
#   articles = tag.articles
#   article_ids = articles.map do |article|
#     article.id
#   end
#   article_ids = article_ids.uniq

#   tag.articles.delete_all
#   article_ids.each do |article_id|
#     tag.articles << Article.find(article_id)
#   end
# end

# Delete articles w empty text or extract
Tag.all.each do |tag|
  tag.articles.each do |article|
    article.delete if article.text == nil || article.extract == nil
  end
end
