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
      autoplay: true,
      dots: true,
      adaptiveHeight: true,
      arrows: true,
      autoplaySpeed: 5000
    });
  }

  return me;

})();

// slider.init();

$(document).ready(function() {

  document.querySelector('.js-slider') && slider.init();
  
  // console.log(document.querySelector('.slider'));
  // console.log(document.querySelector('.slider2'));
  // console.log(1 && 2);
  // console.log(null && 2);
});