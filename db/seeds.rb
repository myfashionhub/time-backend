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

#Article.find(1).tags << Tag.find(4)
#Article.find(1).tags << Tag.find(11)
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

#Article.find(1).update({:img_url => 'http://timedotcom.files.wordpress.com/2014/11/bottles-of-alcohol.jpg?w=814'})
Article.find(2).update({:img_url => 'http://i.imgur.com/gp1uBza.jpg'})
Article.find(3).update({:img_url => 'http://i.imgur.com/pWpplfq.jpg'})
Article.find(4).update({:img_url => 'http://timedotcom.files.wordpress.com/2014/11/saudi-microbiologist-hosam-zowawi.jpg?w=1100'})
Article.find(5).update({:img_url => 'http://timedotcom.files.wordpress.com/2014/11/109188920.jpg?w=1100'})
Article.find(6).update({:img_url => 'http://i.imgur.com/oLSgb0j.png'})
Article.find(7).update({:img_url => 'http://i.imgur.com/BymrNl7.png'})
Article.find(8).update({:img_url => 'http://i.imgur.com/WxYAEjP.png'})
Article.find(9).update({:img_url => 'http://i.imgur.com/mNvpz8R.jpg'})
Article.find(10).update({:img_url => 'http://i.imgur.com/M6UQPl4.jpg'})
Article.find(11).update({:img_url => 'http://i2.cdn.turner.com/money/dam/assets/141115140603-bill-cosby-letterman-620xa.jpg'})
Article.find(12).update({:img_url => 'http://i.imgur.com/JSMds8l.png'})
Article.find(13).update({:img_url => 'http://i2.cdn.turner.com/money/dam/assets/141114134902-walmart-black-friday-protest-620xa.jpg'})
Article.find(14).update({:img_url => 'http://i.imgur.com/cfW6xPj.png'})
Article.find(15).update({:img_url => 'http://i.imgur.com/VcF9sKQ.png'})
Article.find(16).update({:img_url => 'http://i2.cdn.turner.com/money/dam/assets/141114123241-adam-silver-620xa.jpg'})
Article.find(17).update({:img_url => 'http://i2.cdn.turner.com/money/dam/assets/141114141706-godfather-house-620xa.jpg'})
Article.find(18).update({:img_url => 'http://i.imgur.com/UT9oeTk.png'})
Article.find(19).update({:img_url => 'http://i.imgur.com/ueFpjaZ.png'})
Article.find(20).update({:img_url => 'http://i.imgur.com/Ax5B2ek.png'})
Article.find(21).update({:img_url => 'http://img2.timeinc.net/people/i/2014/news/141124/kerisha-mark-1024.jpg'})
Article.find(22).update({:img_url => 'http://img2.timeinc.net/people/i/2014/greatideas/blog/141124/dominos-600x450.jpg'})
Article.find(23).update({:img_url => 'http://img2-3.timeinc.net/people/i/2014/news/141124/tate-smith-1-800.jpg'})
Article.find(24).update({:img_url => 'http://i.imgur.com/k5uRvnd.png'})
Article.find(25).update({:img_url => 'http://img2.timeinc.net/people/i/2014/news/141201/amanda-bynes-435.jpg'})
Article.find(26).update({:img_url => 'http://img2-3.timeinc.net/people/i/2014/news/141201/daniel-day-lewis-435.jpg'})
Article.find(27).update({:img_url => 'http://img2.timeinc.net/people/i/2014/stylewatch/blog/141124/nph-0-600x800.jpg'})
Article.find(28).update({:img_url => 'http://img2-1.timeinc.net/people/i/2014/news/141124/brook-shields-435.jpg'})
Article.find(29).update({:img_url => 'http://img2-2.timeinc.net/people/i/2014/news/141201/susan-boyle-435.jpg'})
Article.find(30).update({:img_url => 'http://img2.timeinc.net/people/i/2014/cbb/blog/141124/padma-lakshmi-300x400.jpg'})
Article.find(31).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/15/Johnny-Depp-Stage.jpg'})
Article.find(32).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/13/Dumb-and-Dumber-To-Review.jpg'})
Article.find(33).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/15/Gone-Girl.jpg'})
Article.find(34).update({:img_url => 'http://img2-2.timeinc.net/ew/i/2014/11/15/Chris-Pratt.jpg'})
Article.find(35).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/14/Keira-Knightley_612x380.jpg'})
Article.find(36).update({:img_url => 'http://img2.timeinc.net/ew/i/2012/05/13/spoiler-room-02.jpg'})
Article.find(37).update({:img_url => 'http://img2.timeinc.net/ew/i/2013/08/18/foxcatcher-09_612x380.jpg'})
Article.find(38).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/12/How-to-Get-Away-With-Murder_612x380.jpg'})
Article.find(39).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/13/benedict-cumberbatch-02_612x380.jpg'})
Article.find(40).update({:img_url => 'http://img2.timeinc.net/ew/i/2014/11/13/papermag_612x380.jpg'})
