$(document).ready(function() {

	var x, y, div_x, div_y;
	var width = 100;
	var height = 100;

	var movement = function() {
		window.onmousemove = function(e) {
			if (div_x == x && div_y == y) {
				width += 10;
				height += 10;
			} else {
				width = 100;
				height = 100;
			}
			x = e.pageX;
			y = e.pageY;
		}
	}
	setInterval(function() {
	
		movement();
	
		console.log("x= " + x + " y= " + y);

		div_x = x - 50;
		div_y = y - 50;

		var div = $('<div>').css({
			"position" : "absolute",
			"left" : div_x + "px",
			"top" : div_y + "px",
			"width" : width + "px",
			"height" : height + "px",
			"border-radius" : "50%",
			"background" : "rgba(255, 0, 0, 0.05)"
		});
		$(document.body).append(div);

	}, 100);

})
