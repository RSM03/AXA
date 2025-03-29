  let timeRot3;
  let timeRead;
  let dfltTime = 10;

  if(sessionStorage.hasOwnProperty("rotationTime")){
      timeRot3 = sessionStorage.getItem("rotationTime");
  }else{
      timeRot3 = dfltTime;
  }

  if(timeRot3 == ""){
      timeRot3 = dfltTime;
  }

if( $("div.js-full-banner-carousel").length > 0){

    timeRead = parseInt($("div.js-full-banner-carousel").attr("aria-time"));

    if(timeRead == 0){
        timeRead = timeRot3;
    }

    if(timeRead < 0){
        timeRot3 = timeRead * (-1);
    }

    timeRot3 = timeRead * 1000;

}



let fullBannerSlider = $('.c-full-banner-slider');
function fullBannerFunction() {
    if(fullBannerSlider.length > 0) {
        let width = window.innerWidth;
        if(width > 767) {
            if(!$('.js-full-banner-carousel').hasClass('owl-carousel')) {
                $('.js-full-banner-carousel').addClass('owl-carousel').addClass('owl-theme');
            }
            $('.js-full-banner-carousel').owlCarousel({
              loop:true,
              slideSpeed : 400,
              paginationSpeed : 400,
              margin:0,
              nav:false,
              dots: true,
              autoplay: true,
              autoplayTimeout:timeRot3,
              autoplayHoverPause:false,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  1000:{
                      items:1
                  }
              }
            })
        }else {
            $('.js-full-banner-carousel').owlCarousel('destroy');
            $('.js-full-banner-carousel').removeClass('owl-carousel').removeClass('owl theme');
        }
    }

    $('.owl-carousel').on('changed.owl.carousel', function(e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    });

    $('.owl-carousel').on('click', '.owl-dots, .owl-nav', function(e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    });
}

fullBannerFunction();
window.addEventListener('resize', fullBannerFunction);
