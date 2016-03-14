(function($) {
	'use strict';

	// scroll to top plugin
	$.fn.apricot = function(options) {
		var defaultOptions = {
			duration: 300
		};

		options = $.extend(defaultOptions, options || {});
		
		return this.on('click', function() {

			$('html, body').animate({
				scrollTop: 0
			}, options.duration);

			return false;

		})
		;

	};

})(jQuery);