tags = [{name: 'Art'},
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
    date: article[:date_published]
  })
end
