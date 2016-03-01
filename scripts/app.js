var app = (function($) {
	'use strict';

	var carousel,
			textCircle,
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

	init = function() {
		carousel('#gallery');
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
