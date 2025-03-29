function tinyCarouselPaging() {
    //metadata
    let screenWidth = window.innerWidth;
    //dom
    let tinyCarousel = $('.js-tiny-carousel');
    let carouselItem = $('.js-tiny-carousel .js-carousel-item');
    let jsInitial = $('.c-carousel-cards__counter .js-initial');
    let jsFinal = $('.c-carousel-cards__counter .js-final');

    if(tinyCarousel.length > 0) {
        let perPage;
        if(screenWidth < 600) {
            perPage = 1;
        }else {
            if(screenWidth < 1000) {
                perPage = 2;
            }else {
                perPage = 3;
            }
        }
        let items = carouselItem.length;

        let pagesNum;
        if(pagesNum % 2 == 0) {
            pagesNum = parseInt(items/perPage);
        }else {
            pagesNum = Math.ceil(items/perPage);
        }

        jsFinal.html(pagesNum);

        $('.js-tiny-carousel').on('changed.owl.carousel', function(event) {
            let pageNumber = (event.page.index + 1);
            jsInitial.html(pageNumber);
        })

    }
}

function carouselLess() {
    let width = window.innerWidth;
    let noCarousel = document.getElementsByClassName('c-carousel-cards--no-carousel')[0];
    if(width < 1000) {

      $('.js-no-carousel').owlCarousel({
              stagePadding: 100,
              loop:false,
              margin:10,
              nav:false,
              center:true,
              responsive:{
                  0:{
                      items:1,
                      slideBy: 1
                  },
                  600:{
                      items:2,
                      slideBy:1
                  },
                  1000:{
                      items:3,
                      slideBy:1
                  }
              }
      })
    }else {
    $('.js-no-carousel').owlCarousel({
                         stagePadding: 0,
                         loop:false,
                         margin:5,
                         nav:false,
                         responsive:{
                             0:{
                                 items:1,
                                 slideBy: 1
                             },
                             600:{
                                 items:2,
                                 slideBy:1
                             },
                             1000:{
                                 items:3,
                                 slideBy:1
                             }
                         }
                 })
         $('.js-no-carousel .owl-stage').css('justify-content', 'center');
         /*$('.js-no-carousel').trigger('destroy.owl.carousel');
         $('.js-no-carousel').css('display', 'flex');*/
    }
  }
//init de carousel: función que determina el aspecto del componente dependiendo del width de la pantalla. Trigger también con evento resize
function carouselResponsive () {
    let wi = window.innerWidth;
    if(wi < 1000) {
      $('.js-tiny-carousel').owlCarousel({
              stagePadding: 100,
              loop:false,
              margin:10,
              nav:false,
              center:true,
              //stagePadding: 40,
              //loop:false,
              //margin:5,
              //nav:true,
              responsive:{
                  0:{
                      items:1,
                      slideBy: 1
                  },
                  600:{
                      items:2,
                      slideBy:1
                  },
                  1000:{
                      items:3,
                      slideBy:1
                  }
              }
      })
    }else {
          $('.js-tiny-carousel').owlCarousel({
                  loop:false,
                  margin:5,
                  nav:true,
                  responsive:{
                      0:{
                          items:1,
                          slideBy: 1
                      },
                      600:{
                          items:2,
                          slideBy:1
                      },
                      1000:{
                          items:3,
                          slideBy:1
                      }
                  }
          })
    }
  }

  carouselLess();
  carouselResponsive();
  tinyCarouselPaging();

window.addEventListener('resize', carouselLess);
window.addEventListener('resize', carouselResponsive);
window.addEventListener('resize', tinyCarouselPaging);
