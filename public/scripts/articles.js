var tagArticlesLoaded = 0;

function getAllArticles(tagArray) {
  var numselect = 0;
  for (var i = 0; i < tagArray.length; i++) {
	  getArticle(tagArray[i].id);
	}
  if (tagArticlesLoaded === tagArray.length - 1) {
    $('.story').click(toggleContent);
  }
}

function getArticle(tag_id) {
  $.ajax({
    url: '/tags/'+tag_id+'/articles',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
		  displayArticles(data, tag_id);
    }
  });
}

function displayArticles(articles, tag_id) {
  for (var i = 1; i < articles.length; i++) {
    var article = articles[i];
  	/*var minHeight = $.sharedCount(article.url);*/
  	var stories = $('.stories').attr('data-tag', tag_id);
    var storyDiv = $('<div>').addClass('story '+article.id).css('background-image', 'url('+article.img_url+')');
  	var overlay = $('<div>').addClass('overlay');
  	var title = $('<p>').addClass('title').html(article.title)
  	var tldr = $('<p>').addClass('tldr').html('Placeholder tldr text');
  	var articleDiv = $('<div>').addClass('article');
  	var newstext = $('<div>').addClass('newstext').html(article.extract);
  	var sharelist = $('<ul>').addClass('share');
  	var fbLi = $('<li>').html('<a href=""><i class="fa fa-facebook"></i></a>');
  	var twitterLi = $('<li>').html('<a href=""><i class="fa fa-twitter"></i></a>');
  	var linkLi = $('<li>').html('<a href=""><i class="fa fa-link"></i></a>');
  	sharelist.append(fbLi).append(twitterLi).append(linkLi);
  	articleDiv.append(newstext).append(sharelist);
  	overlay.append(title).append(tldr);
  	storyDiv.append(overlay).append(articleDiv);
  	stories.append(storyDiv);
  	var storyfirstchild=$(storyDiv).children(':first-child');
  	storyDiv.css({
  	  "background-image": 'url('+article.img_url+')'
      });

  	storyfirstchild.css({
  		"border-top": "3px solid rgba(240, 240, 240, 1)"
	  });
  }

  tagArticlesLoaded += 1;
  $('.story').hover(mouseEnter, mouseLeave);

}
