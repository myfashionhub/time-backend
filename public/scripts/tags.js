function getTags() {
  $.ajax({
    url: '/tags',
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
    var tag = $('<li>').addClass('tags');
    tag.html(tagArray[i].name);
    tag.appendTo($('.tag_area'));
  }
}
