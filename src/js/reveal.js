$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	reveal = $('.component-reveal-footer').height();
	console.log(reveal);
	$('.reveal-wrapper').css({'margin-bottom': reveal});
	$('.component-reveal-footer').css({'height': reveal});
}
