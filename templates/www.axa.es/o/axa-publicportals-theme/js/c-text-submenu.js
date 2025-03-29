if($('.js-text-submenu-carousel')) {
    $('.js-text-submenu-carousel').owlCarousel({
          stagePadding: 35,
          loop:false,
          nav:false,
          margin: 10,
          dots: false,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:4
              },
              1000:{
                  items:5,
                  stagePadding: 60
              },
              1250: {
                items: 5,
                stagePadding: 80
              }
        }
    })
}