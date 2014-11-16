function getTags() {
  $.ajax({
    url: '/tags.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      displayTags(data);
    }
  });
}

function displayTags(tagArray) {
  for (var i = 0; i < tagArray.length; i++) {
    var tag = tagArray[i];
    var tagLi = $('<li>').addClass('tags');
    tagLi.html(tag.name).attr('data', tag.id);
    if (i < tagArray.length/2) {
      tagLi.appendTo($('.tag_area .row1'));
    } else {
      tagLi.appendTo($('.tag_area .row2'));
    }
  }
}
