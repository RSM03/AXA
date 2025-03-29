let button = document.getElementsByClassName('js-logged-header-button')[0];
let windowH = document.getElementsByClassName('js-logged-header-window')[0];
let icon = document.querySelector('.js-logged-header-arrow-icon svg');
let mobileButton = document.getElementsByClassName('js-logged-header-mobile-button')[0];
let mobileWindowH = document.getElementsByClassName('js-logged-header-mobile-window')[0];

let closeMobileLoggedHeader = document.getElementsByClassName('js-logged-header-mobile-window-close')[0];
let opened = false;

function loggedHeader(button,windowH,isMobile) {
    if(button!=null){
        button.onclick=function(e) {
            e.preventDefault();
            if(!opened) {
                if(isMobile) {
                    if(windowH){
                        windowH.classList.add('visible');
                    }
                    opened = true;
                    if(icon){
                       icon.classList.add('rotate');
                    }
                }else {
                    if(windowH){
                        windowH.classList.add('visible');
                    }
                    opened = true;
                }
            }else {
                if(isMobile) {
                    let navigation = document.getElementsByClassName('navigation')[0];
                    /*if(navigation){
                    navigation.classList.remove('is-open');
                    }*/
                    if(windowH){
                        windowH.classList.remove('visible');
                    }
                    opened = false;
                    if(icon){
                        icon.classList.remove('rotate');
                    }

                }else {
                    if(windowH){
                        windowH.classList.remove('visible');
                    }
                    opened = false;
                    if(icon){
                        icon.classList.remove('rotate');
                    }
                }
            }
        }
    }
    if(closeMobileLoggedHeader!=null){
        closeMobileLoggedHeader.onclick=function(e) {
            e.preventDefault();
            let navigation = document.getElementsByClassName('navigation')[0];
            /*if(navigation){
                navigation.classList.remove('is-open');
            }*/
            if(windowH){
                windowH.classList.remove('visible');
            }
            opened = false;
            if(icon){
                icon.classList.remove('rotate');
            }
        }
    }
 }

document.addEventListener(
    "click",
    function(event) {
        // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
        if (!event.target.closest(".js-logged-header-window") && !event.target.closest(".js-logged-header-button")) {
            if(windowH){
              windowH.classList.remove('visible');
            }
            opened = false;
            if(icon){
              icon.classList.remove('rotate');
            }
        }else {
            return false;
        }
    },
    false
)

$(document).ready(function() {
    loggedHeader(button,windowH,false);
    loggedHeader(mobileButton,mobileWindowH,true);
});
