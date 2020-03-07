$(document).ready(function () {

	var background = " "

	$('.palette-colour').on('click', function () {
		background = $(this).css('background-image');
	})


	$('.canvas-spelling-space-big').on('click', function () {
		$(this).css("background-image", background );
	});


	$('.btn').on('click', function () {
		$('.canvas-spelling-space-big').css('background', '');
	});

	$('.btn').on('click', function () {
		$('.canvas-space').css('background', '');
	});

});
