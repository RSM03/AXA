    function pictureCarousel() {
        let width = window.innerWidth;

        if(width > 999) {
            $('.js-mbl-picture-carousel').trigger('destroy.owl.carousel');
            $('.js-picture-carousel').owlCarousel({
              stagePadding: 80,
              loop:false,
              nav:false,
              dots: false,
              responsive:{
                  0:{
                      items:1,
                      margin: 0
                  },
                  600:{
                      items:2,
                      margin: 30
                  },
                  1000:{
                      items:3,
                      margin: 63
                  },
                  1300:{
                    items: 4
                  }
              }
            })
        }else {
            $('.js-mbl-picture-carousel').addClass('owl-theme owl-carousel');
            if('.js-picture-carousel') {
                $('.js-picture-carousel').owlCarousel({
                          stagePadding: 80,
                          loop:false,
                          nav:false,
                          dots: false,
                          responsive:{
                              0:{
                                  items:1
                              },
                              600:{
                                  items:2
                              },
                              1000:{
                                  items:3,
                                  margin: 63
                              },
                              1300:{
                                items: 4
                              }
                          }
                })
            }
            if($('.js-mbl-picture-carousel')) {
                $('.js-mbl-picture-carousel').owlCarousel({
                  stagePadding: 30,
                  loop:false,
                  nav:false,
                  dots: false,
                  responsive:{
                      0:{
                          items:1
                      },
                      600:{
                          items:2,
                          margin: 30
                      },
                      1000:{
                          items:3,
                          margin: 63
                      },
                      1300:{
                        items: 4
                      }
                  }
                })
            }
        }
    }
    pictureCarousel();
    window.addEventListener('resize', pictureCarousel);


