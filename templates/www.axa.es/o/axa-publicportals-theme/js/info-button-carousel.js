let infoButtonCarousel = document.getElementsByClassName('js-product-list-carousel');
let infoButtonCarouselSmall = document.getElementsByClassName('js-product-list-carousel-small');

if(infoButtonCarousel.length > 0) {
    $('.js-product-list-carousel').owlCarousel({
              loop:false,
              nav:true,
              dots: false,
              margin: 10,
              responsive:{
                  0:{
                      items:1,
                      stagePadding: 40,
                      margin: 20
                  },
                  768:{
                      items:3,
                      stagePadding: 50
                  },
                  1250:{
                      items:5,
                      stagePadding: 0
                  }
              }
            })
}

function smallCarousel() {
        let width = window.innerWidth;
        if(width < 1000) {
            $('.js-product-list-carousel-small').owlCarousel({
                  loop:false,
                  nav:false,
                  dots: false,
                  margin: 0,               
                  responsive:{
                      0:{
                          items:1,
                          stagePadding: 55
                      },
                      768:{
                          items:3,
                          stagePadding: 30
                      },
                      1250:{
                          items:5,
                          stagePadding: 0
                      }
                  }
                })
        }else {
           $('.js-product-list-carousel-small').trigger('destroy.owl.carousel');
        }
}

$('.js-product-list-next').click(function(e) {
    e.preventDefault();
    if(infoButtonCarousel.length > 0){
        $('.js-product-list-carousel').trigger('next.owl.carousel');
    }
    if(infoButtonCarouselSmall.length > 0){
        $('.js-product-list-carousel-small').trigger('next.owl.carousel');
    }
})

$('.js-product-list-prev').click(function(e) {
    e.preventDefault();
    if(infoButtonCarousel.length > 0){
        $('.js-product-list-carousel').trigger('prev.owl.carousel');

    }
    if(infoButtonCarouselSmall.length > 0){
        $('.js-product-list-carousel-small').trigger('prev.owl.carousel');
    }
})
if(infoButtonCarousel.length > 0) {
    $('.js-product-list-carousel').on('changed.owl.carousel', function(event) {
                let itemIndex = event.item.index;
                let itemLength = event.item.count;
                let perPage;
                let width = window.innerWidth;
                if(width < 1000) {
                    perPage = 3;
                }else {
                    perPage = 5;
                }
                let itemSet = Math.round(itemLength - perPage);

                if(itemIndex == itemSet) {
                    $('.js-product-list-next').css('display', 'none');
                    $('.js-product-list-prev').css('display', 'block');
                }else if(itemIndex == 0) {
                    $('.js-product-list-prev').css('display', 'none');
                    $('.js-product-list-next').css('display','block');
                }else {
                    $('.js-product-list-prev').css('display', 'block');
                    $('.js-product-list-next').css('display','block');
                }
            })
}

if(infoButtonCarouselSmall.length > 0) {
    $('.js-product-list-carousel-small').on('changed.owl.carousel', function(event) {
                let itemIndex = event.item.index;
                let itemLength = event.item.count;
                let perPage;
                let width = window.innerWidth;
                if(width < 1000) {
                    perPage = 3;
                }else {
                    perPage = 5;
                }
                let itemSet = Math.round(itemLength - perPage);
                if(width > 1000) {
                    if(itemIndex == itemSet) {
                        $('.js-product-list-next').css('display', 'none');
                        $('.js-product-list-prev').css('display', 'block');
                    }else if(itemIndex == 0) {
                        $('.js-product-list-prev').css('display', 'none');
                        $('.js-product-list-next').css('display','block');
                    }else {
                        $('.js-product-list-prev').css('display', 'block');
                        $('.js-product-list-next').css('display','block');
                    }
                }else {
                    $('.js-product-list-next').css('display', 'none');
                    $('.js-product-list-prev').css('display', 'none');
                }
            })
}

if(infoButtonCarouselSmall.length > 0) {
    smallCarousel();
    window.addEventListener('resize', smallCarousel);
}