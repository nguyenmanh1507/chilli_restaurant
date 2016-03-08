
function initMap() {
	var latLng = new google.maps.LatLng(20.718796, 107.049503),
			options = {
				zoom: 17,
				center: latLng,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
				scrollwheel: false
			},
			marker
	;

	// Create a map object and specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('gMap'), options);

	// Create marker and set its position.
	marker = new google.maps.Marker({
		map: map,
		position: latLng
	});
}
