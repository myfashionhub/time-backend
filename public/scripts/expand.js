var expand = function(){
	$('.stories div').click(function(){
		$(this).children('.article').slideToggle(500)
		if($(this).children('.article').isVisible()){
			$(this).children('.overlay').css({
      "background-color": "rgba(0,0,0,0)"});
		}
	});
	
}