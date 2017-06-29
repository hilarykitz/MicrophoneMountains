var map;
var pos;
function initialize() {
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

map.setOptions(
{draggable: false,
scrollwheel: false,
fillcolor: "#FFD400" }

);




//TRANSIT LAYER 

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  //TRAFFIC LAYER 

    var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You are here   '
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

    var marker = new google.maps.Marker({
        position: pos,
        title: 'Position',
        map: map,
        draggable: true,
        visible: true
    });

    updateMarkerPosition(pos);
    geocodePosition(pos);
    google.maps.event.addListener(marker, 'drag', function () {

        updateMarkerPosition(marker.getPosition());
    });
    $('#button').click(function () {
        marker.setVisible(true);
    });

console.log(data);
//google.maps.event.addDomListener(window, 'load', initialize);

//GEOCODE 

geocoder = new google.maps.Geocoder();

  from = document.getElementById("from").value;
  to = document.getElementById("to").value;

if (geocoder)

{

   geocoder.geocode( { 'address': from}, function(results, status)

   {

      if (status == google.maps.GeocoderStatus.OK)

      {

         //location of first address (latitude + longitude)

         location1 = results[0].geometry.location;
      } else

      {

         alert("Geocode was not successful for the following reason: " + status);

      }

   });

   geocoder.geocode( { 'address': to}, function(results, status)

   {

      if (status == google.maps.GeocoderStatus.OK)

      {

         //location of second address (latitude + longitude)

         location2 = results[0].geometry.location;

        // calling the showMap() function to create and show the map

         showMap();

      } else

      {

        alert("Geocode was not successful for the following reason: " + status);

      }

   });

}

latlng = new google.maps.LatLng((location1.lat()+location2.lat())/2,(location1.lng()+location2.lng())/2);

directionsService = new google.maps.DirectionsService();

//ROUTE DIRECTIONS

function calculateRoute(from, to) {
  var mapOptions = mapOptions;
        // Draw the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
          origin: from,
          destination: to,
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(
          directionsRequest, function(response, status)
          {
            if (status == google.maps.DirectionsStatus.OK)
            {
              new google.maps.DirectionsRenderer({
                map: map,
                directions: response,
              });
            }
            else
              $("#error").append("Unable to retrieve your route<br />");
          });
        var directionsDisplay = new google.maps.DirectionsRenderer(
        {
         suppressMarkers: false,
         suppressInfoWindows: false
       });

        directionsDisplay.setMap(map);
        var request = {
         origin:from,
         destination:to,
         travelMode: google.maps.DirectionsTravelMode.DRIVING
       };

       directionsService.route(request, function(response, status)
       {
         if (status == google.maps.DirectionsStatus.OK)
         {
          directionsDisplay.setDirections(response);
          distance = "The distance between the two points on the chosen route is: "+response.routes[0].legs[0].distance.text;
          distance += "The approximative driving time is: "+response.routes[0].legs[0].duration.text;
          var distancecost = parseFloat(response.routes[0].legs[0].distance.text) * 1.6 + 4.25;
          var timecost = parseFloat(response.routes[0].legs[0].duration.text) * 0.5;
          var cost = parseInt(distancecost, 10) + parseInt(timecost, 10);
          document.getElementById("distance_road").innerHTML = "$" + cost.toFixed(2);

        }
      });


     }

      $(document).ready(function() {
        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("Your browser doesn't support the Geolocation API");
          return;
        }
 
        $("#from", "#to").click(function(event) {
          event.preventDefault();
          var addressId = this.id.substring(0, this.id.indexOf("-"));
 
          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error").append("Unable to retrieve your address<br />");
            });
          },
          function(positionError){
            $("#error").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          });
        });
 
        $("#submit").click(function(event) {
          event.preventDefault();
          calculateRoute($("#from").val(), $("#to").val());
        });
        //google.maps.event.addDomListener(window, 'load', initialize);

 });

