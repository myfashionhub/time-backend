# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
  Articles.find_or_create_by({
    url: article[:url],
    title: article[:title],
    publication: article[:publication],
    extract: article[:extract],
    date: article[:date_published]
  })
end
