$(document).ready(function () {
	
	function randomColor() {
		return '#' +(Math.random()*0xffffff|0).toString(16);
	};

	$(".box").on("mouseenter", function () {
		$(this).css('background-color', randomColor());
		$(this).css('box-shadow', "0 0 20px white");
		
	});

    $(".box").on("click", function () {
		$(this).css('background-color', randomColor({hue: 'yellow'}));
		$(this).css('box-shadow', "0 0 20px white");
		
	});

	$(".box").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
		$(this).css('z-index', "1");
	});
});