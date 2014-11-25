function toggleContent(e) {
  $('.article').hide();

	var hidden = $(this).find('.article');
	if (hidden.css('display') === 'none') {
		hidden.slideDown();
	} else {
		hidden.slideUp();
	}
}

function mouseEnter() {
  $(this).css({'background-color': 'rgba(0,0,0,0.3)'});

}

function mouseLeave() {
  $(this).css({'background-color': 'rgba(0,0,0,0.65)'});
}
