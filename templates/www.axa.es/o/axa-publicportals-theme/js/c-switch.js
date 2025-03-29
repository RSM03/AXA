    let buttonSwitch = document.getElementsByClassName('js-active');
    let scrolledButton = document.getElementsByClassName('js-item-scrolled');
    let scrollItem = document.getElementsByClassName('js-scroll-item-link');
    let cuadroMedicoForm = document.getElementById('textoInfoCM');
    let searchAgentsResults = document.querySelector('.search-agents.results');
    let saludSearchResults = document.querySelector('.search.results #searchFormCM');
    let accidentesSearchResults = document.querySelector('.search.results #searchFormCMA');

    let multipleSubtitle = document.querySelector('.c-switch-multiple__subtitle');
    function carousel() {
      let width = window.innerWidth;
      if(width < 1000) {
        if(scrolledButton.length > 2) {
          $('.js-scrolled-carousel').addClass('owl-carousel owl-theme');

          $('.js-scrolled-carousel').owlCarousel({
              loop:false,
              stagePadding: 40,
              margin:0,
              nav:false,
              responsive:{
                  0:{
                      items:2
                  },
                  600:{
                      items:3
                  },
                  1000:{
                      items:6
                  }
              }
          })

          for(let i = 0; i < scrollItem.length; i++) {
            let classIndex;
            if(scrollItem[i].classList.contains('active')) {
              classIndex = i + 1;
              if(classIndex == 3 || classIndex == 4) {
                  if(scrolledButton.length > 2) {
                    $(".js-item-scrolled").trigger("to.owl.carousel", [3]);
                  }else {
                    $(".js-item-scrolled").trigger("to.owl.carousel", [4]);
                  }
              }else if(classIndex == 5 || classIndex == 6) {
                  $(".js-item-scrolled").trigger("to.owl.carousel", [5]);
              }
            }
          }

        }
        if(buttonSwitch.length > 2) {
          $('.js-switch-carousel').addClass('owl-carousel owl-theme');

          $('.js-switch-carousel').owlCarousel({
              loop:false,
              margin:0,
              nav:false,
              responsive:{
                  0:{
                      items:2
                  },
                  600:{
                      items:3
                  },
                  1000:{
                      items:6
                  }
              }
          })
          for(let i = 0; i < buttonSwitch.length; i++) {
            let classIndex;
            if(buttonSwitch[i].classList.contains('active')) {
              classIndex = i + 1;
              if(classIndex == 3 || classIndex == 4) {
                  if(buttonSwitch.length == 3) {
                    $(".js-switch-carousel").trigger("to.owl.carousel", [3]);
                  }else {
                    $(".js-switch-carousel").trigger("to.owl.carousel", [4]);
                  }
              }else if(classIndex == 5 || classIndex == 6) {
                  $(".js-switch-carousel").trigger("to.owl.carousel", [5]);
              }
            }
          }
        }else {
            $('.js-switch-carousel').addClass('border-mobile');
        }
      }else {
        $('.js-switch-carousel').removeClass('owl-carousel owl-theme');
        $('.js-switch-carousel').trigger('destroy.owl.carousel');

        $('.js-scrolled-carousel').removeClass('owl-carousel owl-theme');
        $('.js-scrolled-carousel').trigger('destroy.owl.carousel');
      }
    }

    let switchBar = document.getElementsByClassName('js-switch-bar')[0];
    let scrolledBar = document.getElementsByClassName('js-scrolled-bar')[0];
    let comparativaTrigger = document.getElementsByClassName('c-comparativa__table-header')[0];

    if(switchBar) {
        carousel();
        window.addEventListener('resize', carousel);
    }

    var scrollPos = 0;
    /*window.addEventListener('scroll', function(){
      if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // ARRIBA
        if(scrolledBar){
          if(scrolledBar.classList.contains('visible')) {
            scrolledBar.classList.remove('top');
          }
        }
        if(comparativaTrigger) {
          if(comparativaTrigger.classList.contains('scrolled')) {
            comparativaTrigger.classList.remove('top');
          }
        }
        if(cuadroMedicoForm) {
          let formGroup = document.getElementsByClassName('form__group');
          for(let i = 0; i < formGroup.length; i++) {
            formGroup[i].classList.remove('top');
          }
        }
        if(searchAgentsResults) {
          searchAgentsResults.classList.remove('top');
        }
        if(saludSearchResults) {
          let saludFormGroup = saludSearchResults.querySelectorAll('.form__group');
          saludFormGroup.forEach(function(group){
            group.classList.remove('top');
          })
        }
        if(accidentesSearchResults) {
          let accidentesFormGroup = accidentesSearchResults.querySelectorAll('.form__group');
          accidentesFormGroup.forEach(function(group){
            group.classList.remove('top');
          })
        }

      } else {
              // ABAJO
        if(scrolledBar) {
          if(scrolledBar.classList.contains('visible')) {
            scrolledBar.classList.add('top');
          }
        }
        if(comparativaTrigger) {
          if(comparativaTrigger.classList.contains('scrolled')) {
            comparativaTrigger.classList.add('top');
          }
        }
        if(cuadroMedicoForm) {
          let formGroup = document.getElementsByClassName('form__group');
          for(let i = 0; i < formGroup.length; i++) {
            formGroup[i].classList.add('top');
          }
        }
        if(searchAgentsResults) {
          searchAgentsResults.classList.add('top');
        }
        if(saludSearchResults) {
          let saludFormGroup = saludSearchResults.querySelectorAll('.form__group');
          saludFormGroup.forEach(function(group){
            group.classList.add('top');
          })
        }
        if(accidentesSearchResults) {
          let accidentesFormGroup = accidentesSearchResults.querySelectorAll('.form__group');
          accidentesFormGroup.forEach(function(group){
            group.classList.add('top');
          })
        }
      }
      scrollPos = (document.body.getBoundingClientRect()).top;
    });*/
if(multipleSubtitle){
  new Waypoint({
    element: multipleSubtitle,
    handler: function(direction) {
    let screenWidth = window.innerWidth;
    scrolledBar.classList.add('top');
    if(direction == 'down') {
      switchBar.classList.add('scroll');
      scrolledBar.classList.add('visible');
    }else if(direction == 'up') {
      switchBar.classList.remove('scroll');
      scrolledBar.classList.remove('visible');
      scrolledBar.classList.remove('top');
    }
    //this.destroy() //for once
    },
    offset: "10%"
  });
}
   

    let comparadorScrolled = document.getElementsByClassName('c-comparativa__table');
    if(comparadorScrolled.length > 0) {
        let elementDesk = document.querySelector('.c-comparativa__table');
        let elementMbl = document.querySelector('.c-comparativa__title');
        let choosenEl;
            let screenWidth = window.innerWidth;

            if(screenWidth < 768) {
                choosenEl = elementMbl;
            }else {
                choosenEl = elementDesk;
            }

        new Waypoint({
               element: document.querySelector('.c-comparativa__table'),
               handler: function(direction) {
                    if(direction == 'down') {
                       // switchBar.classList.remove('scroll');
                       if(scrolledBar){
                        scrolledBar.classList.remove('visible');
                        }
                       
                    }else if(direction == 'up') {
                        //switchBar.classList.add('scroll');
                       if(scrolledBar){
                        scrolledBar.classList.add('visible');
                        }
                    }
                    //this.destroy() //for once
                },
                offset: "10%"
            });
            let comparativaFather = document.querySelector('.c-comparativa__table');
            new Waypoint({
               element: document.querySelector('.js-switch-off'),
               handler: function(direction) {
                   if(direction == 'down') {
                      //switchBar.classList.add('scroll');
                       if(scrolledBar){
                        scrolledBar.classList.add('visible');
                        }
                   }else {                   
                    //switchBar.classList.remove('scroll');
                        if(scrolledBar){
                            scrolledBar.classList.remove('visible');
                        }
                   }
                   //this.destroy() //for once
               },
               offset: "1%"
            });
    }