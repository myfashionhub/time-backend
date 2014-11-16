var expand = function(){
	$('.stories div').click(function(){
		$(this).children('.article').slideToggle(500);
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