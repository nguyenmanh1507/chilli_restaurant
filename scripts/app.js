var app = (function($) {
	'use strict';

	var carousel,
			textCircle,
			mobileNav,
			bqCarousel,
			modalForm,
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

	bqCarousel = function(el) {
		$(el).slick({
			autoplay: true,
			autoplaySpeed: 5000,
			prevArrow: '<button type="button" class="btn-slick btn-slick--prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="btn-slick btn-slick--next"><i class="fa fa-angle-right"></i></button>'
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

	modalForm = function(el, modalId) {

		$(el).on('click', function() {
			$(modalId).addClass('is-show');
			$('#s').focus();

			$('body').addClass('is-n-scroll');

			return false;
		});

		$('#closeModal').on('click', function() {

			$(modalId).removeClass('is-show');
			$('body').removeClass('is-n-scroll');

			return false;

		});

	};

	init = function() {

		mobileNav('#hamburger');

		if($(window).slick) {
			carousel('#gallery');
			carousel('#breakfast');
			carousel('#lunch');
			carousel('#dinner');
			bqCarousel('#blockquote');
		}
		
		// textCircle('#circleOne');
		// textCircle('#circleTwo', -2);

		if($(window).mixItUp) {
			$('#galleryContainer').mixItUp({
				selectors: {
					filter: '.filter__item'
				}
			});
		}

		// Modal Form
		modalForm('#formTrigger', '#modal');

		// Scroll to top

		var $apricot = $('#apricot');

		$apricot.apricot();

		$(window).scroll(function() {

			var $this = $(this),
				windowHeight = $this.height()
			;

			if($this.scrollTop() >= windowHeight) {
				$apricot.addClass('is-visible');
			} else {
				$apricot.removeClass('is-visible');
			}

		});

	};

	return {
		init: init
	};

})(jQuery);

jQuery(document).ready(function($) {
	app.init();
});
