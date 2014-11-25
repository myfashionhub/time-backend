function toggleContent(e) {
	console.log(this)
	var hidden = $(this).find('.article');
	if (hidden.css('display') === 'none') {
		hidden.slideDown();
	} else {
		hidden.slideUp();
	}
}

function mouseEnter() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0.2)'});
}

function mouseLeave() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0.5)'});
}
