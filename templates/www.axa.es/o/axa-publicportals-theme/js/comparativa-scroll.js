let comparativaPadre = document.getElementsByClassName('c-comparativa')[0];
let comparativa = document.getElementsByClassName('c-comparativa__horizontal-scroll');
let tableHeader = document.getElementsByClassName('c-comparativa__table-header');
let scrolledEl = $('.c-comparativa__table-header');
let scrollableLoop2 =  document.getElementsByClassName('c-comparativa__scrollable');
let cellButtons = $('.cell-buttons');
function getPosition() {
    let element1 = document.getElementsByClassName('c-header')[0];
    let element2 = document.getElementsByClassName('c-switch-multiple__scroll')[0];
    if(element1 && element2) {
        let h1 = element1.offsetHeight;
        let h2 = element2.offsetHeight;
        let height = (h1 + h2);

        return height;
    }else {
        if(element1) {
            let h1 = element1.offsetHeight;
            let height = h1;
            return height;
        }else if(element2) {
            let h2 = element2.offsetHeight;
            let height = h2;
            return height;
        }else {
            return 0;
        }
    }
}

let hasSwitch = document.getElementsByClassName('c-switch-multiple');

function resizeHeader() {
    //scrolledEl.css('top', '0');
    let innerWidth = window.innerWidth;
    for(let j = 0; j < comparativa.length; j++) {
        if(comparativa[j].getAttribute('aria-expanded') == 'true') {
            if(innerWidth > 767) {
                let compaWidth = comparativa[j].clientWidth;
                tableHeader[j].style.width = compaWidth+'px';
            }else {
                let iconsComponent = scrollableLoop2[j].querySelector('.c-comparativa__icons');
                let compaWidth = iconsComponent.scrollWidth;
                let windowWidth = window.innerWidth;
                if(windowWidth < compaWidth) {
                    tableHeader[j].style.width = parseInt(compaWidth + 30)+'px';
                }else {
                    tableHeader[j].style.width = '100%';
                }
            }
        }else {
            let compaWidth = comparativa[0].clientWidth;
            tableHeader[j].style.width = compaWidth+'px';
        }
    }
}
if(comparativaPadre) {
    new Waypoint({
      element: document.querySelector('.c-comparativa__icons'),
      handler: function(direction) {
        let screenWidth = window.innerWidth;
        if(direction == 'down') {

            scrolledEl.addClass('scrolled');
        }else if(direction == 'up') {

            scrolledEl.removeClass('scrolled');
        }
        //this.destroy() //for once
      },
      offset: "40%"
    });

    new Waypoint({
          element: document.querySelector('.cell-buttons'),
          handler: function(direction) {
            let screenWidth = window.innerWidth;
            if(direction == 'down') {
              scrolledEl.removeClass('scrolled');
            }else if(direction == 'up') {
                if(hasSwitch.length > 0) {
                    scrolledEl.addClass('scrolled');
                    scrolledEl.addClass('switch');
                } else {
                    scrolledEl.addClass('scrolled');
                }
            }
            //this.destroy() //for once
          },
          offset: "20%"
    });
    resizeHeader();
    window.addEventListener("resize", resizeHeader, true);
}
