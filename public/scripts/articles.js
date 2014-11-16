function getAllArticles(tagArray) {
  var numselect = 0;
  for (var i = 0; i < tagArray.length; i++) {
	  getArticle(tagArray[i].id);
	}

  $('.story').hide();
  var numselect = 0;
  for (var i = 0; i < tagArray.length; i++) {
	 if(($(tagArray[i]).hasClass('tags selected'))){
		  getArticle(tagArray[i].id);
			numselect = numselect+1;
	 }
  }
  if(numselect ==0){
	  for (var i=0; i<tagArray.length; i++){
		  getArticle(tagArray[i].id);
	  }
  }
  $.ajax({
	  success: function(){
		hover()
		expand();
	  }
  });
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
  for (var i = 1; i < articles.length; i++) {
    var article = articles[i];
	/*var minHeight = $.sharedCount(article.url);*/
	var stories = $('.stories');
    var storyDiv = $('<div>').addClass('story '+article.id).css('background-image', 'url('+article.img_url+')');
	var overlay = $('<div>').addClass('overlay');
	var title = $('<p>').addClass('title').html(article.title)
	var tldr = $('<p>').addClass('tldr').html('Placeholder tldr text');
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
	var storyfirstchild=$(storyDiv).children(':first-child');
	storyDiv.css({
	  "background-image": 'url('+article.img_url+')'
    });

	storyfirstchild.css({
		"border-top": "3px solid rgba(240, 240, 240, 1)"
	});

  }
}
/*
function removeArticle(tag_id) {
  $.ajax({
    url: '/tags/'+tag_id+'/articles',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data)
      removeArticles(data);
    }
  });
}

function removeArticles(articles) {
  for (var i = 1; i < articles.length; i++) {
    	$(article[i]).hide(0);
 	}
}
*/
