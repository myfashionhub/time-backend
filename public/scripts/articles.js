function getAllArticles(tagArray) {
  $('.story').hide(0);
  var numselect = 0;
  for (var i = 0; i < tagArray.length; i++) {
	  alert(tagArray.toString());
	  alert(tagArray[i]);
	  alert((tagArray[i]).id);
	  alert(tagArray.attr('class'));
	  alert((tagArray[i]).attr('class'));
	  /*
	 if(($(tagArray[i]).hasClass('tags selected'))){
		    getArticle(tagArray[i].id); 
			alert('selected statement');
			numselect = numselect+1;
	 }*/
  }
  if(numselect ==0){
	  for (var i=0; i<tagArray.length; i++){
		  alert('generate all statement');
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
	  "background-image": 'url('+article.img_url+')',
	  "background-repeat":"no-repeat",
	  "background-attachment":"center",
	  "background-position":"center",
	  "-webkit-background-size": "cover",
	  "-moz-background-size": "cover",
	  "-o-background-size": "cover",
	  "background-size":"100%",
	  "width":"100%",
	  "text-align":"center",
	  "font-family":"'Open Sans',Helvetica,Arial,sans-serif",
	  "color":"white",
	  "vertical-align":"middle",
	  "padding":"0px",
	  "margin":"0px",
	  "z-index":"-1"
    });
	storyfirstchild.css({
		"border-top": "3px solid rgba(240, 240, 240, 1)"
	});
	 title.css({
	  "font-size":"3em",
	  "font-family": "Garamond",
	  "font-weight": "bold",
	  "position":"relative",
	  "top":"31%"
	});
	tldr.css({
	  "position":"absolute",
	  "text-align":"right",
	  "bottom": "0px",
	  "right":"10px",
	  "font-size":"2em",
	  "font-family":"'Courier New',Courier,serif",
	  "margin-bottom": "0px"
	});
	newstext.css({
	  "margin-left": "20px",
	  "margin-right": "20px",
	  "font-size": "1.5em",
	  "text-align": "left",
	  "line-height": "170%",
	  "text-indent": "2em"
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
