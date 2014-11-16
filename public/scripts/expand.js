var expand = function(){
	$('.story').click(function(){
		$(this).children('.article').slideToggle(500);
	});
	
}

var hover = function(){
	$('.story').children('.overlay').hover(
	function(){
	   $(this).css({ 'background-color' : 'rgba(0,0,0,0)'});
	   }, 
	function(){
	   $(this).css({ 'background-color' : 'rgba(0,0,0,0.5)'});
	});
}