window.onload = function() {
    reportWindowSize();

    function reportWindowSize() {

        let timeRot2;
        let timeRead;
        let dfltTime = 10;
      
        if(sessionStorage.hasOwnProperty("rotationTime")){
            timeRot2 = sessionStorage.getItem("rotationTime");
        }else{
            timeRot2 = dfltTime;
        }
      
        if(timeRot2 == ""){
            timeRot2 = dfltTime;
        }

        if( $("div.owl-theme-c-product-carrusel").length > 0 ){            
            
            timeRead = parseInt($("div.owl-theme-c-product-carrusel").attr("aria-time"));


            if(timeRead == 0){
                timeRead = timeRot2;
            }
        
            if(timeRead < 0){
                timeRot2 = timeRead * (-1);
            }
        
            timeRot2 = timeRead * 1000;
    
        }


        $('.owl-theme-c-product-carrusel').addClass("owl-carousel");
        $('.owl-theme-c-product-carrusel.owl-carousel').owlCarousel({
            loop: true,
            slideSpeed : 400,
            paginationSpeed : 400,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout:timeRot2,
            autoplayHoverPause:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        })


    }
    $('.owl-theme-c-product-carrusel .owl-item').each(function() {
        var hijo = $(this).children().attr("class");
        $(this).addClass(hijo);

    });

    $('.owl-theme-c-product-carrusel .owl-item').each(function() {
        var altura = $(".owl-theme-c-product-carrusel .owl-stage").height()

        $(this).css("height", altura);

    });
    window.addEventListener('resize', function(event) {
        $('.owl-theme-c-product-carrusel .owl-item').each(function() {
            var altura = $(".owl-theme-c-product-carrusel .owl-stage").height()

            $(this).css("height", altura);

        });
    });

    $('.owl-carousel').on('changed.owl.carousel', function(e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    });
    
    $('.owl-carousel').on('click', '.owl-dots, .owl-nav', function(e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    });
}