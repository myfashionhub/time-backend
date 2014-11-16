var expand = function(){
	$('.stories div').click(function(){
		$(this).children('.article').slideToggle(500);
/*		if ($(this).children('.article').is(':visible')) {
        	$('.stories div').off('mouseenter mouseleave');
		}
		else {
			$('.stories div').on('mouseenter mouseleave');
		}*/
	});
	
}

var hover = function(){
	$('.stories div').children('.overlay').hover(
	function(){
	   $(this).css({ 'background-color' : 'rgba(0,0,0,0)'});
	   }, 
	function(){
	   $(this).css({ 'background-color' : 'rgba(0,0,0,0.5)'});
	});
}