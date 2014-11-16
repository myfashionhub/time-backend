function getTags() {
  $.ajax({
    url: '/tags.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      displayTags(data);
      getAllArticles(data);
    }
  });
}

function displayTags(tagArray) {
  for (var i = 0; i < tagArray.length; i++) {
    var tag = tagArray[i];
    var tagLi = $('<li>').addClass('tags').addClass('unselected');
    tagLi.html(tag.name+' ').attr('data', tag.id);
    tagLi.append('<i class="fa fa-check"></i>');
    if (i < tagArray.length/2) {
      tagLi.appendTo($('.tag_area .row1'));
    } else {
      tagLi.appendTo($('.tag_area .row2'));
    }
  }
  $(".tags").click(function(e) {
    toggleSelectClass(e);
  });
}

function toggleSelectClass(e) {
  var tag = $(e.target);
  var tagClass = tag.attr('class');
  if (tagClass.indexOf(' selected') > -1) {
    tag.removeClass('selected').addClass('unselected');
	$.ajax({
    url: '/tags.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
		alert(data);
      getAllArticles(data);
    }
  });
  } else {
    tag.removeClass('unselected').addClass('selected');
	$.ajax({
    url: '/tags.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
		alert(data);
     /* getAllArticles(data);*/
	}
  });
  }
}

