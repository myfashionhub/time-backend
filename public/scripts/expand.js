function toggleContent(e) {
	console.log(e.target)
	var hidden = $(e.target).find('.article');
	if (hidden.css('display') === 'none') {
		console.log('it will slide down')
		hidden.slideDown();
	} else {
		hidden.slideUp();
		console.log('slide back up')
	}
}

function mouseEnter() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0)'});
}

function mouseLeave() {
	$(this).find('.overlay').css({ 'background-color' : 'rgba(0,0,0,0.5)'});
}
