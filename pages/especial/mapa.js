localStorage.setItem("redirect", "")

function send_data(a){

  localStorage.setItem('redirect', a);

}

var marcadores = [
  {
    lat_lng:[-34.444685917557216 , -58.70095816615408],
    description:"Entrada principal",
    link:"arte",
    img_url:"images/arte_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44474001905654, -58.70086020365973],
    description:"Salida",
    link:"!!Deposito",
    img_url:"images/no_pasar_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.4447766241886, -58.70077722841195],
    description:"Entrada principal",
    link:"geografia",
    img_url:"images/geo_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44469659110469, -58.700383527455756],
    description:"Salida",
    link:"folklore",
    img_url:"images/folklore_icon.png",
    icon:"marker",
  },
  // {
  //   lat_lng:[-34.44483005961787, -58.7006410109755],
  //   description:"Salida",
  //   link:"!!literatura",
  //   img_url:"images/aula.png",
  //   icon:"marker",
  // },
  {
    lat_lng:[-34.444853803535985, -58.7005873231042],
    description:"",
    link:"!!Practicas profesionalizantes, proyecto integrador de 7º y CENS",
    img_url:"images/aula.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44489211872931, -58.70049248442706],
    description:"Aula 6: literatura",
    link:"literatura",
    img_url:"images/literatura.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.444549019670504, -58.70059671659047],
    description:"Electrotecnia (taller): Muestra sobre el trabajo de los alumnos en esta materia.",
    link:"electro",
    img_url:"images/electro_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44440903443079, -58.70054907935044],
    description:"",
    link:"hidroneumatica",
    img_url:"images/hidro_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.4444071181474, -58.70063191411556],
    description:"",
    link:"maderas",
    img_url:"images/maderas_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44434851358496, -58.700745352421535],
    description:"",
    link:"laboratorio",
    img_url:"images/labo_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44449376321085, -58.70057487306184],
    description:"",
    link:"termoformado",
    img_url:"images/termoformado_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44447123348139, -58.70039930357473],
    description:"",
    link:"cnc",
    img_url:"images/cnc_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.4444991855771, -58.700345277702056],
    description:"",
    link:"fabricacion_placa_egresados",
    img_url:"images/placa_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44495537418767, -58.70037837732225],
    description:"",
    link:"ingles",
    img_url:"images/teatro_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.444453592913234, -58.70084593774398],
    description:"",
    link:"robotica",
    img_url:"images/robotica_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.444415488950476, -58.70086627914171],
    description:"",
    link:"electronica",
    img_url:"images/arduino_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.4449189666541, -58.70035501030689],
    description:"",
    link:"rock_and_ford",
    img_url:"images/rockford_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44456888658226, -58.700260807904854],
    description:"",
    link:"fundicion",
    img_url:"images/fundicion_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.444470280496574, -58.70075900230411],
    description:"",
    link:"motores",
    img_url:"images/motores_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44460405126575, -58.70045543068231],
    description:"",
    link:"!!Diseño e impresión 3d",
    img_url:"images/3dprint_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44466498068219, -58.70032783694214],
    description:"",
    link:"!!Soldadura",
    img_url:"images/soldadura_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44438273318959, -58.70083757973805],
    description:"",
    link:"plc",
    img_url:"images/plc_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.444549914357346, -58.70040322006382],
    description:"",
    link:"metales",
    img_url:"images/metales_icon.png",
    icon:"marker",
  },

  {
    lat_lng:[-34.44450277308208, -58.700522709221346],
    description:"",
    link:"!!Torneria",
    img_url:"images/torneria_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44463118371418, -58.70044147473109],
    description:"",
    link:"consolas_retro",
    img_url:"images/console_icon.png",
    icon:"marker",
  },
  {
    lat_lng:[-34.44433043533652, -58.70079928835676],
    description:"",
    link:"matejuegos",
    img_url:"images/mate_icon.png",
    icon:"marker",
  },
]


var markers = []



for (var i = 0; i < marcadores.length; i++) {
  var description = marcadores[i].description;
  if (marcadores[i].link != "") {
    description += '<a class="waves-effect btn-flat" onclick="send_data'+"('"+marcadores[i].link+"')"+'">Ver</a>'
    //marcadores[i].link
  }


  markers[i] = {
      "type": "Feature",
      "properties": {
          "description": description,
          "icon": marcadores[i].icon,
          "iconSize": [35, 35],
          "img_url": marcadores[i].img_url,
          "link": marcadores[i].link
      },
      "geometry": {
          "type": "Point",
          "coordinates": [marcadores[i].lat_lng[1], marcadores[i].lat_lng[0]]
      }
  }
}

console.log(markers);





var map;
var p1 = {lat: -34.44431357, lng: -58.70076184};
var p2 = {lat: -34.44452793, lng: -58.70010336};

var pos1 = [-34.44431357, -58.70076184];
var pos2 = [-34.44452793, -58.70010336];

mapboxgl.accessToken = 'pk.eyJ1IjoibWFydG94ZGxvbCIsImEiOiJjam13c2g4YzAzbTR1M3dueWlydWpmOTVxIn0.V2jnYL-7xKKY14Oj5BSCaw';






var bounds = [
    [-74.04728500751165, 40.68392799015035], // Southwest coordinates
    [-73.91058699000139, 40.87764500765852]  // Northeast coordinates
];


function popup(c,d){
  new mapboxgl.Popup()
  .setLngLat([-58.70076184, -34.44431357])
  .setHTML("d")
  .addTo(map);
  console.log(c);
}

var bounds = [
    [-58.70138022662857, -34.44540034488494], // Southwest coordinates
    [-58.699739660544836, -34.443922288060904]  // Northeast coordinates
];





var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    bearing: -63.9,
    pitch: 0,
    zoom: 18.5,
    center: [-58.700448, -34.444666],
    maxBounds: bounds,
});
map.addControl(new mapboxgl.NavigationControl());



map.on('load', function () {
  document.getElementsByClassName("mapboxgl-ctrl-bottom-right")[0].style.display = "none";
  document.getElementsByClassName("mapboxgl-ctrl-logo")[0].style.display = "none";
  var geojson = {
    "type": "FeatureCollection",
  "features": markers
}
  //ARRIBA A LA DERECHA
  //-58.70080691249268, -34.44428233416106

  //ARRIBA A LA IZQUIERDA
  //-58.70105683943976, -34.44470159609842

  //ABAJO A LA IZQUIERDA
  //-58.70035886980979, -34.44498599426629

  //ABAJO A LA DERECHA
  //-58.700108705801924, -34.44456621148542

  map.addSource("myImageSource", {
      "type": "image",
      "url": "images/planopro.png",
      "coordinates": [
        [-58.70105683943976, -34.44470159609842],
        [-58.70080691249268, -34.44428233416106],
        [-58.700108705801924, -34.44456621148542],
        [-58.70035886980979, -34.44498599426629],

      ]
  });

  map.addLayer({
      "id": "overlay",
      "source": "myImageSource",
      "type": "raster",
      "paint": {
      "raster-opacity": 1
      }
  });


map.addLayer({
       "id": "places",
       "type": "symbol",
       "source": {
           "type": "geojson",
           "data": geojson
       },
       "layout": {
           "icon-image": "{icon}-15",
           "icon-allow-overlap": true
       }
   });






  geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url("'+marker.properties.img_url+'")';

    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center";
    el.addEventListener('click', function() {
        console.log(marker.geometry.coordinates);
        send_data(marker.properties.link)
    });

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});


//[-58.70031257, -34.44487322]


    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        var link = e.features[0].properties.link;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        send_data(link)

    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});



map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});






/*          margin: -10%;
          -ms-transform: rotate(-20deg);
          -webkit-transform: rotate(-20deg);
          transform: rotate(-20deg);*/
