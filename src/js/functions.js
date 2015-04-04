var module1 = (function() {

// header menu toggle
  var tgl = document.querySelector('.js-nav-toggle');
  var menu = document.querySelector('.js-header');

  tgl.addEventListener('click', function(e) {
      e.preventDefault();
      
      menu.classList.toggle('open');
  });


// slick-slider
  // $('.js-slider').slick({
  //   autoplay: true,
  //   dots: true,
  //   adaptiveHeight: true,
  //   mobileFirst: true
  // });
})();


var slider = (function() {
  var me = {};

  me.init = function() {
    $('.js-slider').slick({
      // autoplay: true,
      dots: true,
      adaptiveHeight: true,
      arrows: true,
      autoplaySpeed: 5000
    });
  }

  return me;

})();



var gmap = (function() {
  var pinkmap = {};

  pinkmap.init = function() {

    var map;
    var pink = new google.maps.LatLng(59.936468, 30.321086);
    var markers = [];
    var image = new google.maps.MarkerImage('img/icon.png');

    
    var mapOptions = {
      zoom: 15,
      center: pink,
      mapTypeControl: false,
      navigationControl: false
    };

    map = new google.maps.Map(document.getElementById("js-map"), mapOptions);
    addMarker();

    function addMarker() {
      markers.push(new google.maps.Marker({
        position: pink,
        raiseOnDrag: false,
        icon: image,
        map: map,
        draggable: false
      }));
    }
  }

  return pinkmap;

})();

// slider.init();

$(document).ready(function() {

  document.querySelector('.js-slider') && slider.init();
  document.querySelector('#js-map') && gmap.init();
  
  // console.log(document.querySelector('.slider'));
  // console.log(document.querySelector('.slider2'));
  // console.log(1 && 2);
  // console.log(null && 2);
});