function initialize() {
 var latlng = new google.maps.LatLng(34.8573, -111.795);
 var settings = {
 zoom: 15,
 center: latlng,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var map = new google.maps.Map(document.getElementById("js-map"), settings);
};



// marker
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
<script>

  var map;
  var mapCoordinates = new google.maps.LatLng(13.0630171, 80.2296082);
  var markers = [];
  var image = new google.maps.MarkerImage( '9lessons.png', // иконка
    new google.maps.Size(84,56), // размеры иконок
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
  );

  function addMarker() {
    markers.push(new google.maps.Marker({
      position: mapCoordinates,
      raiseOnDrag: false,
      icon: image,
      map: map,
      draggable: false
    }));
  }

  function initialize() {
    var mapOptions = {
      .......
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    addMarker(); // вызов функции
  }

  google.maps.event.addDomListener(window, 'load', initialize);

</script>
//HTML код
<div id="map-canvas" style="height:100%"></div>