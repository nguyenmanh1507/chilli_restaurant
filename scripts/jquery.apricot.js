(function($) {
	'use strict';

	// scroll to top plugin
	$.fn.apricot = function(options) {
		var defaultOptions = {
			duration: 300,
			target: '#apricot'
		};

		options = $.extend(defaultOptions,options || {});
		
		return this.on('click', function() {
			var $this = $(this);

			$('html, body').animate({
				scrollTop: 0
			}, options.duration);

			return false;
		})
		;

	};

})(jQuery);