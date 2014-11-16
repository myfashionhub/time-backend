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
  Article.find_or_create_by({
    url: article[:url],
    title: article[:title],
    publication: article[:publication],
    extract: article[:extract],
    date: article[:date_published]
  })
end

Article.find(1).tags << Tag.find(4)
Article.find(1).tags << Tag.find(11)
Article.find(2).tags << Tag.find(10)
Article.find(2).tags << Tag.find(7)
Article.find(3).tags << Tag.find(10)
Article.find(4).tags << Tag.find(6)
Article.find(4).tags << Tag.find(5)
Article.find(5).tags << Tag.find(10)
Article.find(5).tags << Tag.find(7)
Article.find(6).tags << Tag.find(10)
Article.find(6).tags << Tag.find(1)
Article.find(7).tags << Tag.find(10)
Article.find(8).tags << Tag.find(4)
Article.find(8).tags << Tag.find(6)
Article.find(9).tags << Tag.find(10)
Article.find(9).tags << Tag.find(1)
Article.find(10).tags << Tag.find(1)
Article.find(10).tags << Tag.find(10)
Article.find(11).tags << Tag.find(10)
Article.find(12).tags << Tag.find(9)
Article.find(12).tags << Tag.find(4)
Article.find(12).tags << Tag.find(11)
Article.find(13).tags << Tag.find(3)
Article.find(13).tags << Tag.find(6)
Article.find(14).tags << Tag.find(3)
Article.find(14).tags << Tag.find(6)
Article.find(15).tags << Tag.find(3)
Article.find(15).tags << Tag.find(6)
Article.find(15).tags << Tag.find(4)
Article.find(16).tags << Tag.find(8)
Article.find(16).tags << Tag.find(9)
Article.find(17).tags << Tag.find(7)
Article.find(18).tags << Tag.find(9)
Article.find(19).tags << Tag.find(3)
Article.find(19).tags << Tag.find(4)
Article.find(20).tags << Tag.find(6)
Article.find(20).tags << Tag.find(3)
Article.find(21).tags << Tag.find(11)
Article.find(21).tags << Tag.find(6)
Article.find(22).tags << Tag.find(3)
Article.find(22).tags << Tag.find(4)
Article.find(23).tags << Tag.find(7)
Article.find(24).tags << Tag.find(10)
Article.find(25).tags << Tag.find(6)
Article.find(25).tags << Tag.find(10)
Article.find(26).tags << Tag.find(10)
Article.find(27).tags << Tag.find(10)
Article.find(28).tags << Tag.find(10)
Article.find(29).tags << Tag.find(10)
Article.find(30).tags << Tag.find(2)
Article.find(30).tags << Tag.find(10)
Article.find(31).tags << Tag.find(10)
Article.find(32).tags << Tag.find(10)
Article.find(33).tags << Tag.find(10)
Article.find(34).tags << Tag.find(10)
Article.find(35).tags << Tag.find(10)
Article.find(36).tags << Tag.find(10)
Article.find(37).tags << Tag.find(10)
Article.find(38).tags << Tag.find(10)
Article.find(39).tags << Tag.find(10)
Article.find(40).tags << Tag.find(10)

























