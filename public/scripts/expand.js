function toggleContent(e) {
	var hidden = $(e.target).parent().find('.article');
	if (hidden.css('display') === 'none') {
		hidden.slideDown();
	} else {
		hidden.slideUp();
	}
}

function mouseEnter() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0)'});
}

function mouseLeave() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0.5)'});
}
