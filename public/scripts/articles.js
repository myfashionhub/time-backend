function getAllArticles(tagArray) {
  for (var i = 0; i < tagArray.length; i++) {
    getArticle(tagArray[i].id);
  }
}

function getArticle(tag_id) {
  $.ajax({
    url: '/tags/'+tag_id+'/articles',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data)
      displayArticles(data);
    }
  });
}

function displayArticles(articles) {
  for (var i = 0; i < articles.length; i++) {
  	var minHeight = getHeight(article[i]);
    var article = articles[i];
	var stories = $('.stories');
    var storyDiv = $('<div>').addClass('story').css('background-image', 'url('+article.img_url+')');
	var overlay = $('<div>').addClass('overlay');
	var title = $('<p>').addClass('title').html(article.title);
	var tldr = $('<p>').addClass('tldr');
	var articleDiv = $('<div>').addClass('article');
	var newstext = $('<div>').addClass('newstext').html(article.extract);
	var shareDiv = $('<div>').addClass('share');
	var sharelist = $('<ul>');
	var fbLi = $('<li>').html('<a href=""><i class="fa fa-facebook"></i></a>');
	var twitterLi = $('<li>').html('<a href=""><i class="fa fa-twitter"></i></a>');
	var linkLi = $('<li>').html('<a href=""><i class="fa fa-link"></i></a>');
	sharelist.append(fbLi).append(twitterLi).append(linkLi);
	shareDiv.append(sharelist);
	articleDiv.append(newstext).append(shareDiv);
	overlay.append(title).append(tldr);
	storyDiv.append(overlay).append(articleDiv);
	stories.append(storyDiv);
  }
}
