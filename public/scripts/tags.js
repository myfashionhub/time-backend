var tagsShown = [];

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
    var tagLi = $('<li>').addClass('tags');
    tagLi.html(tag.name+' ').attr('data', tag.id);
    tagLi.append('<i class="fa fa-check"></i>');
    if (i < tagArray.length/2) {
      tagLi.appendTo($('.tag_area .row1'));
    } else {
      tagLi.appendTo($('.tag_area .row2'));
    }
  }

  $(".tags").click(function(e) {
    var tag = $(e.target);
    tag.toggleClass('selected');
    var tagClass = tag.attr('class'),
        tagId    = tag.attr('data');

    if (tagClass.indexOf('selected') > -1) {
      if (tagId != undefined) {
        tagsShown.push(tagId);
      }
    } else {
      var tagIndex = tagsShown.indexOf(tagId);
      tagsShown.splice(tagIndex, 1);
    }

    showArticlesByTag();   
  });
}

function showArticlesByTag() {
  if (tagsShown.length === 0) {
    $('.story').show();
  } else {
    $('.story').hide();   
    for (var j = 0; j < tagsShown.length; j++) {
      var tagId = tagsShown[j];
      for (var i=0; i < $('.story').length; i++) {
        if ($($('.story')[i]).attr('data-tag') === tagId) {
          $($('.story')[i]).fadeIn();
        }
      }
    }
  }  
}
