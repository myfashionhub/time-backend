function toggleContent(e) {
	var targetClass = $(e.target).attr('class'),
			hidden;

	if (targetClass.indexOf('title') > -1 || targetClass.indexOf('tldr') > -1) {
		hidden = $(e.target).parent().parent().find('.article');
	} else {
		hidden = $(e.target).parent().find('.article');
	}

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
