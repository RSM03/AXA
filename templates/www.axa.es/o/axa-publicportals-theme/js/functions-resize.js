    function resizeProductCarousel() {
        let father = document.getElementsByClassName('owl-theme-c-product-carrusel');

        for(let i = 0; i < father.length; i++) {
            let child = father[i].querySelector('.owl-stage');
            let height = child.offsetHeight;

            let children = child.childNodes;
            for(let k = 0; k < children.length; k++) {
                if(children[k].classList.contains('owl-item')) {
                    children[k].style.height = 'unset';
                }
            }

            setTimeout(function(){
                for(let k = 0; k < children.length; k++) {
                    if(children[k].classList.contains('owl-item')) {
                        children[k].style.height = height+'px';
                    }
                }
            }, 500)
        }
    }
	
	
    function resizeButtonCards() {
        let father = document.getElementsByClassName('c-product-list__list-item');
        let children = document.getElementsByClassName('c-product-list__list-item--text');
        let subtitle = document.getElementsByClassName('c-product-list__list-item--title');
        let mayor;
        let mayorSubtitle;
  
        for(let i = 0; i < children.length; i++) {
          children[i].style.height = 'unset';
        }
        for(let i = 0; i < subtitle.length; i++) {
            subtitle[i].style.height = 'unset';
        }
  
        setTimeout(function(){
  
          for(let i = 0; i < father.length; i++) {
              let child = father[i].querySelector('.c-product-list__list-item--text');
              let height = child.offsetHeight;
              let subtitleHeight = subtitle[i].offsetHeight;
  
              if(i == 0) {
                  mayor = height;
                  mayorSubtitle = subtitleHeight;
              }else {
                  if(height > mayor) {
                      mayor = height;
                  }
                  if(subtitleHeight > mayorSubtitle) {
                      mayorSubtitle = subtitleHeight;
                  }
              }
          }
          for(let i = 0; i < children.length; i++) {
              children[i].style.height = mayor+'px';
          }
          for(let i = 0; i < subtitle.length; i++) {
              subtitle[i].style.height = mayorSubtitle+'px';
          }
  
        }, 500)
    }

      function resizeContactCards() {
        let contactCard = document.getElementsByClassName('c-contact-card');
        if(contactCard.length > 0) {
            let mayorTitle;
            let mayorSubtitle;
    
            
            let subtitles = document.getElementsByClassName('c-contact-card__text');
            for(let i = 0; i < subtitles.length; i++) {
                subtitles[i].style.height = 'unset';
            }
            
            let titles = document.getElementsByClassName('c-contact-card__title');
            for(let i = 0; i < titles.length; i++) {
                titles[i].style.height = 'unset';
            }
    
            setTimeout(function(){
    
                for(let i = 0; i < contactCard.length; i++) {
                    let title = contactCard[i].querySelector('.c-contact-card__title');
                    let subtitle = contactCard[i].querySelector('.c-contact-card__text');
                    let titleHeight = title.offsetHeight;
                    let subtitleHeight = subtitle.offsetHeight;
                    if(i == 0) {
                        mayorTitle = titleHeight;
                        mayorSubtitle = subtitleHeight;
                    }else {
                        if(titleHeight > mayorTitle) {
                            mayorTitle = titleHeight;
                        }
        
                        if(subtitleHeight > mayorSubtitle) {
                            mayorSubtitle = subtitleHeight;
                        }
                    }
                }
                if(mayorSubtitle > 0) {
                    let subtitles = document.getElementsByClassName('c-contact-card__text');
                    for(let i = 0; i < subtitles.length; i++) {
                        subtitles[i].style.height = mayorSubtitle+'px';
                    }
                }
                if(mayorTitle > 0) {
                    let titles = document.getElementsByClassName('c-contact-card__title');
                    for(let i = 0; i < titles.length; i++) {
                        titles[i].style.height = mayorTitle+'px';
                    }
                }
    
            }, 500)
        }
    }

    function resizePictureCards() {
        let contactCard = document.getElementsByClassName('c-picture-card');
        if(contactCard.length > 0) {
            let mayorTitle;
            let mayorSubtitle;
            let mayorCard;

            let subtitles = document.getElementsByClassName('c-picture-card__text');
            for(let i = 0; i < subtitles.length; i++) {
                subtitles[i].style.height = 'unset';
            }

            let titles = document.getElementsByClassName('c-picture-card__title');
            for(let i = 0; i < titles.length; i++) {
                titles[i].style.height = 'unset';
            }
            setTimeout(function(){

                for(let i = 0; i < contactCard.length; i++) {
                    let title = contactCard[i].querySelector('.c-picture-card__title');
                    let subtitle = contactCard[i].querySelector('.c-picture-card__text');
                    let titleHeight = title.offsetHeight;
                    let subtitleHeight = subtitle.offsetHeight;
                    if(i == 0) {
                        mayorTitle = titleHeight;
                        mayorSubtitle = subtitleHeight;
                    }else {
                        if(titleHeight > mayorTitle) {
                            mayorTitle = titleHeight;
                        }

                        if(subtitleHeight > mayorSubtitle) {
                            mayorSubtitle = subtitleHeight;
                        }
                    }
                }
                if(mayorSubtitle > 0) {
                    let subtitles = document.getElementsByClassName('c-picture-card__text');
                    for(let i = 0; i < subtitles.length; i++) {
                        subtitles[i].style.height = mayorSubtitle+'px';
                    }
                }
                if(mayorTitle > 0) {
                    let titles = document.getElementsByClassName('c-picture-card__title');
                    for(let i = 0; i < titles.length; i++) {
                        titles[i].style.height = mayorTitle+'px';
                    }
                }


                for(let i = 0; i < contactCard.length; i++) {
                    let cardHeight = contactCard[i].offsetHeight;
                    if(i == 0) {
                        mayorCard = cardHeight;
                    }else {
                        if(cardHeight > mayorCard) {
                            mayorCard = cardHeight;
                        }
                    }
                }
                let carousel = $('.js-picture-cards-carousel .owl-stage');
                carousel.css('height', (mayorCard + 15)+'px');

            }, 500)
        }
    }

    function resizeInsuranceDetail() {
        let containerParent = document.getElementsByClassName('c-insurance-detail-grid');
        /*let container = document.getElementsByClassName('c-insurance-detail-grid c-insurance-detail');
        let title = document.getElementsByClassName('c-insurance-detail__title');
        let subtitle = document.getElementsByClassName('c-insurance-detail__subtitle');*/
    for(let i = 0; i < containerParent.length; i++) {

        let container = containerParent[i].getElementsByClassName('c-insurance-detail');
        let title = containerParent[i].getElementsByClassName('c-insurance-detail__title');
        let subtitle = containerParent[i].getElementsByClassName('c-insurance-detail__subtitle');

        if(container.length > 0) {
            let mayorTitle=0;
            let mayorSubtitle=0;

            if(title){
                for(let i = 0; i < title.length; i++) {
                    title[i].style.height = 'unset';
                }
            }
            if(subtitle){
                for(let i = 0; i < subtitle.length; i++) {
                    subtitle[i].style.height = 'unset';
                }
            }
    
            setTimeout(function(){

            if(title){
              for(let i = 0; i < title.length; i++) {
                  let titleHeight = title[i].offsetHeight;
                  if(i == 0) {
                      mayorTitle = titleHeight;
                  }else {
                      if(titleHeight > mayorTitle) {
                          mayorTitle = titleHeight;
                      }
                  }
              }
    
              if(mayorTitle > 0) {
                  for(let i = 0; i < title.length; i++) {
                      title[i].style.height = mayorTitle+'px';
                  }
              }
            }

              if(subtitle){
                for(let i = 0; i < title.length; i++) {
                    let subtitleHeight = subtitle[i].offsetHeight;
                    if(i == 0) {
                        mayorSubtitle = subtitleHeight;
                    }else {
                        if(subtitleHeight > mayorSubtitle) {
                            mayorSubtitle = subtitleHeight;
                        }
                    }
                }
                  if(mayorSubtitle > 0) {
                      for(let i = 0; i < subtitle.length; i++) {
                          subtitle[i].style.height = mayorSubtitle+'px';
                      }
                  }
              }
    
            }, 500)
        }
        }
    }
    function carouselCardSizer(component) {
        let cardText = component;
        let mayor;
        for(let i = 0; i < cardText.length; i++) {
          cardText[i].style.height = 'unset';
            
        }
        setTimeout(function(){
            if(cardText) {
                
              for(let i = 0; i < cardText.length; i++) {
                  let height = cardText[i].offsetHeight;
                  if(i == 0) {
                      mayor = height;
                  }else {
                      if(height > mayor) {
                          mayor = height;
                      }
                  }
              }
              for(let i = 0; i < cardText.length; i++) {
                cardText[i].style.height = mayor+'px';
              }
          }
      
        }, 500)
    }
    let carouselCardTitle = document.getElementsByClassName('c-carousel-card__title');
    let carouselCardSubtitle = document.getElementsByClassName('c-carousel-card__subtitle');


    

    let classEl = document.getElementsByClassName('owl-theme-c-product-carrusel');
	if(classEl.length > 0) {
			//resizeProductCarousel();			
			
			setTimeout(function(){
				resizeProductCarousel();
			}, 2500)
			window.addEventListener('resize', resizeProductCarousel);
	} 
    
    function resizeVideo() {
        let fatherElement = document.getElementsByClassName('c-video');
        let width = window.innerWidth;
        if(width > 767) {
            if(fatherElement.length > 0) {
                for(let i = 0; i < fatherElement.length; i++) {
                    let dataHeight = fatherElement[i].getAttribute('data-height');
                    let dataWidth = fatherElement[i].getAttribute('data-width');
                    if(dataHeight != '' && dataHeight != ' ') {
                        fatherElement[i].style.height = dataHeight;
                    }
                    if(dataWidth != '' && dataWidth != ' ') {
                        fatherElement[i].style.width = dataWidth;
                    }
                }
            }
        }else {
            for(let i = 0; i < fatherElement.length; i++) {
                let videoHeight = fatherElement[i].offsetHeight;
                if(videoHeight != 190) {
                    fatherElement[i].style.height = '190px';
                }
                fatherElement[i].style.width = '100%';
            }
        }
    }

    resizeVideo();
    resizeInsuranceDetail();
    setTimeout(function(){
         resizeButtonCards();
         resizeContactCards();
         resizePictureCards();
         //carouselCardSizer(carouselCardTitle);
         //carouselCardSizer(carouselCardSubtitle);
    }, 1000)
    window.addEventListener('resize', resizeButtonCards);
    window.addEventListener('resize', resizeContactCards);
    window.addEventListener('resize', resizePictureCards);
    window.addEventListener('resize', resizeInsuranceDetail);
    window.addEventListener('resize', resizeVideo);
    /*window.addEventListener('resize', function() {
        carouselCardSizer(carouselCardTitle);
        carouselCardSizer(carouselCardSubtitle);
    })*/