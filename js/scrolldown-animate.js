$(document).ready(function() {
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
        $('.scroll-down').addClass('fade');
      } else{
        $('.scroll-down').removeClass('fade');
      }
    })
  });
  