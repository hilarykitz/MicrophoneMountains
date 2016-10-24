$(function() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsYXJ5a2l0eiIsImEiOiJjaWZqdmR2YWgwMTUzdDBseDZmd3ZrMGx0In0.yribBKcVslZy1qNDu8eSaA';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
        center: [-93, 52],
        zoom: 3.4,
        pitch: 45
    });

map.on('load', function () {

      map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    map.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'white',
            'line-width': 1
        }
    });


    var dataProm = $.getJSON('./pollutions.geojson');

    dataProm.done(function(data) {
          var colorList = [
            [0, '#f0ea54'],
            [10, '#e2d02d'],
            [20, '#e4ac46'],
            [30, '#e59a4d'],
            [40, '#e77657'],
            [50, '#e86058'],
            [80, '#ea4558'],
            [100, 'coral'],
            [200, '#ed1b58'],
            [300, '#FA3939']
          ];
          var circleSize = [
            [0.3, 1],
            [1, 2],
            [10, 3],
            [20, 4],
            [25, 5],
            [30, 6],
            [35, 7],
            [40, 8],
            [45, 9],
            [50, 10],
            [55, 12],
            [75, 13],
            [100, 14],
            [150, 15],
            [200, 17.5],
            [250, 20]
          ]
        map.addSource("factories", {
          "type" : "geojson",
          "data": data
        });

  


          map.addLayer({
              "id": "factories",
              "type": "circle",
              "source": "factories",
              'paint' : {
              'circle-color' : {
                          property: 'SumOfTOTAL_RELE',
                          type: 'interval',
                          stops: colorList
              },
              'circle-radius': {
                          property: 'SumOfTOTAL_RELE',
                          type: 'interval',
                          stops: circleSize
              },
              'circle-opacity': 0.8//,
              // 'fill-extrude-base': {
              //         'type': 'identity',
              //         'property': 'SumOfTOTAL_RELE'
              //     }
              }
            });

          map.addLayer({
              "id": "factory-names",
              "type": "symbol",
              "source": "factories"
          });
    });
    map.on('mousemove', function (e) {
      var features = map.queryRenderedFeatures(e.point),
        p = features[0].properties,
        sector = p.NAICS4_NAME_EN,
        facility = p.FACI_NAME,
        city = p.CITY,
        address = p.ADDRESS ? p.ADDRESS + ', ' : '', 
        prov = p.PROVINCE,
        company = p.COMP_NAME,
        amount = p.SumOfTOTAL_RELE,
        units = p.UNITS;
      if (sector) {
        var label = '<h3>'+company+'</h3><h2>' + amount + ' ' + units + '</h2><h4>'+sector+'</h4><p> '+ address + city + ', ' + prov + '</p></br>';
        document.getElementById('features').innerHTML = label;
      }
    });
});

});//end jQuery
