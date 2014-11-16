var clickon = function() {
				$( ".tags" ).click(function() {
					$(this).css("background-color", "rgba(0, 150, 220, 1)");
					$(this).css("border-color", "rgba(0, 150, 220, 1)");
					$(this).css("color", "white");
					$(".clear_button").show();
				})
			 }

var clickoff = function() {
				$( ".clear_button" ).click(function() {
					$(".tags").css("background-color", "rgba(0, 150, 220, 0)");
					$(".tags").css("border-color", "rgba(0, 150, 220, 1)");
					$(".tags").css("color", "rgba(0, 150, 220, 1)");
					$(".clear_button").hide();
				})
			 }