(function($) {
	'use strict';

	// scroll to top plugin
	$.fn.apricot = function(options) {
		options = $.extend({duration: 300}, options || {});
		
		return this.on('click', function() {
			var $this = $(this);

			$('html, body').animate({
				scrollTop: 0
			}, options.duration);
		});
		
	};

})(jQuery);