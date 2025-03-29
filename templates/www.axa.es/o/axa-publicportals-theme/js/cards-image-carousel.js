function cardsImage() {
 let width = window.innerWidth;
 let presence = document.getElementsByClassName('js-picture-cards-carousel');
 if(width > 767) {
	 
    if(!$('.js-picture-cards-carousel').hasClass('owl-carousel')) {
        $('.js-picture-cards-carousel').addClass('owl-carousel').addClass('owl-theme');
    }
    if(presence.length > 0) {
      $('.js-picture-cards-carousel').owlCarousel({
      loop:false,
      margin:30,
      nav:false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
    })
    $('.js-cards-image-next').click(function(e) {
        e.preventDefault();
        $('.js-picture-cards-carousel').trigger('next.owl.carousel');
    })
    $('.js-cards-image-prev').click(function(e) {
        e.preventDefault();
        $('.js-picture-cards-carousel').trigger('prev.owl.carousel');
    })
    $('.js-picture-cards-carousel').on('changed.owl.carousel', function(event) {
        let itemIndex = event.item.index;
        let itemLength = event.item.count;
        let perPage = 3;
        let itemSet = Math.round(itemLength - perPage);
        if(itemIndex == itemSet) {
            $('.js-cards-image-next').css('display', 'none');
            $('.js-cards-image-prev').css('display', 'block');
        }else if(itemIndex == 0) {
            $('.js-cards-image-prev').css('display', 'none');
            $('.js-cards-image-next').css('display','block');
        }else {
            $('.js-cards-image-prev').css('display', 'block');
            $('.js-cards-image-next').css('display','block');
        }
    })
   }
 }else {
    if(presence.length > 0) {
        $('.js-picture-cards-carousel').owlCarousel('destroy');
        $('.js-picture-cards-carousel').removeClass('owl-carousel').removeClass('owl-theme');
        $('.js-picture-cards-carousel').css('display', 'block');
    }
 }
}

function contactCards() {
     let width = window.innerWidth;
     let presence = document.getElementsByClassName('js-contact-cards-carousel');
     if(width > 767) {
        if(!$('.js-contact-cards-carousel').hasClass('owl-carousel')) {
            $('.js-contact-cards-carousel').addClass('owl-carousel').addClass('owl-theme');
        }
        if(presence.length > 0) {
          $('.js-contact-cards-carousel').owlCarousel({
          loop:false,
          margin:30,
          nav:false,
          dots: false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2,
				  stagePadding: 40
              },
              1000:{
                  items:3
              }
          }
        })
        $('.js-contact-cards-image-next').click(function(e) {
            e.preventDefault();
            $('.js-contact-cards-carousel').trigger('next.owl.carousel');
        })
        $('.js-contact-cards-image-prev').click(function(e) {
            e.preventDefault();
            $('.js-contact-cards-carousel').trigger('prev.owl.carousel');
        })
        $('.js-contact-cards-carousel').on('changed.owl.carousel', function(event) {
            let itemIndex = event.item.index;
            let itemLength = event.item.count;
            let perPage;
            if(width < 1000) {
                perPage = 2;
            }else {
                perPage = 3;
            }
            let itemSet = Math.round(itemLength - perPage);

            if(itemIndex == itemSet) {
                $('.js-contact-cards-image-next').css('display', 'none');
                $('.js-contact-cards-image-prev').css('display', 'block');
            }else if(itemIndex == 0) {
                $('.js-contact-cards-image-prev').css('display', 'none');
                $('.js-contact-cards-image-next').css('display','block');
            }else {
                $('.js-contact-cards-image-prev').css('display', 'block');
                $('.js-contact-cards-image-next').css('display','block');
            }
        })
       }
     }else {
        if(presence.length > 0) {
            $('.js-contact-cards-carousel').owlCarousel('destroy');
            $('.js-contact-cards-carousel').css('display', 'block');
        }
     }
}


contactCards();
cardsImage();
window.addEventListener('resize', cardsImage);
window.addEventListener('resize', contactCards);