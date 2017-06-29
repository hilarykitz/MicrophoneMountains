
var toronto = new google.maps.LatLng(43.7182713,-79.3777061);
var coordinateMapType = new CoordMapType();

function initialize() {
  var mapOptions = {
    zoom: 10,
    center: toronto,
    streetViewControl: false,
    mapTypeId: 'coordinate',
    mapTypeControlOptions: {
      mapTypeIds: ['coordinate', google.maps.MapTypeId.ROADMAP],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  google.maps.event.addListener(map, 'maptypeid_changed', function() {
    var showStreetViewControl = map.getMapTypeId() != 'coordinate';
    map.setOptions({'streetViewControl': showStreetViewControl});
  });

  // Now attach the coordinate map type to the map's registry
  map.mapTypes.set('coordinate', coordinateMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
