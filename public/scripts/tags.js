function getTags() {
  $.ajax({
    url: 'http://time-back.herokuapp.com/tags',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      displayTags(data);
    }
  });
}

function displayTags(tagArray) {
  $('.tag_area').empty();
  for (var i = 0; i < tagArray.length; i++) {
    var tag = tagArray[i];
    var tagLi = $('<li>').addClass('tags');
    tagLi.html(tag.name).attr('data', tag.id);
    tagLi.appendTo($('.tag_area'));
  }
}