(function() {

// header menu toggle
  var tgl = document.querySelector('.js-nav-toggle');
  var menu = document.querySelector('.page-header');

  tgl.addEventListener('click', function(e) {
      e.preventDefault();
      
      menu.classList.toggle('open');
  });


// slick-slider
  $('.slider-slick').slick({
    autoplay: true,
    dots: true,
    adaptiveHeight: true,
    mobileFirst: true
  });

})();