function toggleSelectClass(e) {
	console.log(e.target)
	var tag = $(e.target);
	var tagClass = tag.attr('class');
	if (tagClass.indexOf('selected') > -1) {
		tag.removeClass('selected').addClass('unselected');
	} else {
		tag.addClass('selected').removeClass('unselected');
	}
}
