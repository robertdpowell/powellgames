$(document).ready(function () {

	var paint = "white"

	$('.palette-colour').on('click', function () {
		paint = $(this).css('background-color');
	})

	$('.canvas-space').on('click', function () {
		$(this).css("background-color", paint );
	});
	
	$('.btn').on('click', function () {
		$('.canvas-space').css('background', '');
	});

});