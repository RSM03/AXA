function desplegable() {
    const elements = {
      container: document.getElementsByClassName('js-desplegable'),
      button: document.getElementsByClassName('js-desplegable-button'),
      textContainer: document.getElementsByClassName('js-desplegable-content'),
      buttonTextContainer: document.getElementsByClassName('js-desplegable-btn-text'),
      buttonIconContainer: document.getElementsByClassName('js-desplegable-btn-icon'),
      fadeOutClass: 'fade-out',
      class: 'is-open'
    };
 
    if(elements.container.length > 0) {
      for(let i = 0; i < elements.button.length; i++) {
 
        let dataOpened = elements.button[i].getAttribute('data-open');
        let dataClosed = elements.button[i].getAttribute('data-closed');
 
        elements.button[i].onclick=function() {
 
          if(elements.textContainer[i].classList.contains(elements.class)) {
 
            elements.textContainer[i].classList.add(elements.fadeOutClass);
            setTimeout(function(){
              elements.textContainer[i].classList.remove(elements.class);
              elements.textContainer[i].classList.remove(elements.fadeOutClass);
            }, 150)
            elements.buttonTextContainer[i].innerHTML = dataClosed;
            elements.buttonIconContainer[i].innerHTML = '<svg width="10" height="6" viewBox="0 0 10 6"fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L5 4.5L8.5 1.5"stroke="#00008F" stroke-width="1.5"stroke-linecap="round"/></svg>';
 
 
          }else {
 
            elements.textContainer[i].classList.add(elements.class);
            elements.buttonTextContainer[i].innerHTML = dataOpened;
            elements.buttonIconContainer[i].innerHTML = '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 4.5L5 1.5L1.5 4.5" stroke="#00008F" stroke-width="1.5"stroke-linecap="round"/></svg>';
 
          }
 
        }
      }
    }
 }
 
 desplegable();
 
 