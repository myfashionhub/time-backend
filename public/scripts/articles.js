function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}

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
  var article = articles[i];
	var stories = $('.stories');
    var storyDiv = $('<div>').addClass('story');
	var overlay = $('<div>').addClass('overlay');
	var title = $('<p>').addClass('title').html(article.title)
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
	
	var storyDivStyle = css($(storyDiv));
	$(storyDiv).css(storyDivStyle);
	/*storyDiv.css({
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
	  "margin":"0px"
    });
	 title.css({
	  "font-size":"3em",
	  "font-family": "Garamond",
	  "font-weight": "bold",
	  "position":"relative",
	  "top":"31%"
	});
	tldr.css({
	  "position":"absolute";
	  text-align:right;
	  bottom: 0px;
	  right:10px;
	  font-size:2em;
	  font-family:"Courier New",Courier,serif;
	  margin-bottom: 0px;
	}); */
  }
}
