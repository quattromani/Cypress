// Toggle Navigation
$(function() {
	$(".open-panel").click(function(){
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		} else {
			$('html').addClass('open-nav');
		}
		$(this).toggleClass('active');
	});
	$('.close-panel').click(function() {
		if($('html').hasClass('open-nav')) {
			$('html').removeClass('open-nav');
		}
	});
});

var nav = $('nav');
		navHeight = $('nav').outerHeight();
		bannerHeight = $('.hero-banner').height();
    ns = 'fixed-top';
    hdr = $('header').outerHeight();

$(window).scroll(function() {
  if( $(this).scrollTop() > (bannerHeight - navHeight - hdr) ) {
    nav.addClass(ns);
    $('nav li.hidden').css('display', 'table-cell');
    $('header').css('z-index', '-1');
    // $('.header-banner').css('margin-top', navHeight);
  } else {
    nav.removeClass(ns);
    $('nav li.hidden').css('display', 'none');
    $('header').css('z-index', '9');
    // $('.header-banner').css('margin-top', '0');
  }
});
