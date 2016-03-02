var app = (function($) {
	'use strict';

	var carousel,
			textCircle,
			mobileNav,
			$body = $('body'),
			$siteNav = $('#siteNav'),
			$navIcon = $('#hamburger i.fa'),
			$siteHeader = $('.site-header__beta'),
			init
	;

	carousel = function (el) {
		$(el).slick({
			infinite: true,
			slidesToShow: 4,
			autoplay: true,
  		autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	};

	textCircle = function(el, dir) {
		dir = dir || undefined;
		$(el).arctext({
			radius: 350,
			dir: dir
		});
	};

	mobileNav = function (el) {
		var count = 2;

		$(el).on('click', function() {

			$siteNav.toggleClass('is-active');
			$siteHeader.toggleClass('is-active');

			((count % 2) === 0) // jshint ignore:line
				?	$navIcon.removeClass('fa-bars').addClass('fa-times') // jshint ignore:line
				: $navIcon.removeClass('fa-times').addClass('fa-bars') // jshint ignore:line
			; // jshint ignore:line

			count++;

			// $body.toggleClass('disable-scroll');

			return false;

		});
	};

	init = function() {

		mobileNav('#hamburger');

		if($(window).slick) carousel('#gallery');
		
		textCircle('#circleOne');
		textCircle('#circleTwo', -2);
	};

	return {
		init: init
	};

})(jQuery);

jQuery(document).ready(function($) {
	app.init();
});
