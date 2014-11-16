var expand = function(){
	$('.stories div').click(function(){
		$(this).children('.article').toggle(500)
	});
}