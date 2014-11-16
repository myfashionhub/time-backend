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

}
