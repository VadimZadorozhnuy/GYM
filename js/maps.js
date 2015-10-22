function initialize() {

	var gMaps = google.maps;
	var gcoder = new gMaps.Geocoder();
	var mapStartOptions = {
		center: {lat: 50.024275, 
						 lng: 36.333017},
		zoom: 15,
		mapTypeId: gMaps.MapTypeId.HYBRID,
		mapTypeControlOptions: {
		position: gMaps.ControlPosition.TOP_LEFT},
	};
	var map = new gMaps.Map($('#map-canvas')[0], mapStartOptions);
	var marker = new google.maps.Marker({
		position: {lat: 50.023922, 
							lng: 36.327473},
		map: map,
		title: 'Тренажерный зал "ИНТЕР" (в здании ДЮСШ 2)'
	});
};

google.maps.event.addDomListener(window, 'load', initialize);
