function toggleContent(e) {
  $('.article').hide();

	var hidden = $(this).find('.article');
	if (hidden.css('display') === 'none') {
		hidden.slideDown();
	} else {
    console.log('slide up')
		hidden.slideUp();
	}
}

function mouseEnter() {
  $(this).find('.overlay').css({'background-color': 'rgba(0,0,0,0.2)'});
}

function mouseLeave() {
  $(this).find('.overlay').css({'background-color': 'rgba(0,0,0,0.5)'});
}
