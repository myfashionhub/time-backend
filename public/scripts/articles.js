var tagArticlesLoaded = 0;

function getAllArticles(tagArray) {
  var numTags = tagArray.length;
  for (var i = 0; i < numTags; i++) {
	  getArticle(tagArray[i].id, numTags);
	}
}

function getArticle(tag_id, numTags) {
  $.ajax({
    url: '/tags/'+tag_id+'/articles',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
		  displayArticles(data, tag_id, numTags);
    }
  });
}

function displayArticles(articles, tag_id, numTags) {
  for (var i = 1; i < articles.length; i++) {
    var article = articles[i];
  	/*var minHeight = $.sharedCount(article.url);*/
  	var stories = $('.stories');
    var storyDiv = $('<div>').addClass('story '+article.id)
    .attr('data-tag', tag_id).css('background-image', 'url('+article.img_url+')');
  	var overlay = $('<div>').addClass('overlay');
  	var title = $('<p>').addClass('title').html(article.title)
  	var tldr = $('<p>').addClass('tldr').html(article.extract+' - '+article.publication);

  	var articleDiv = $('<div>').addClass('article');
  	var newstext = $('<div>').addClass('newstext').html(article.text);
  	var sharelist = $('<ul>').addClass('share');
  	var fbLi = $('<li>').html('<a href=""><i class="fa fa-facebook"></i></a>');
  	var twitterLi = $('<li>').html('<a href=""><i class="fa fa-twitter"></i></a>');
  	var linkLi = $('<li>').html('<a href=""><i class="fa fa-link"></i></a>');
  	sharelist.append(fbLi).append(twitterLi).append(linkLi);
  	articleDiv.append(newstext).append(sharelist);
  	overlay.append(title).append(tldr);
  	storyDiv.append(overlay).append(articleDiv);

  	stories.append(storyDiv);
  	storyDiv.css({
  	  "background-image": 'url('+article.img_url+')'
      });
  }

  tagArticlesLoaded += 1;
  $('.story').hover(mouseEnter, mouseLeave);

  if (tagArticlesLoaded === numTags) {
    $('.story').click(toggleContent);
  }
}
