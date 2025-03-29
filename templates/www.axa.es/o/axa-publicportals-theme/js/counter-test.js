import { CountUp } from './countUp.js';
let animatedCounter = document.querySelectorAll('.js-counter-container');
if(animatedCounter) {
    function countStart(){
      const $counters = animatedCounter;
      const options = {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: "1"
            };

      $counters.forEach( (item) => {
        let dataFinal = item.getAttribute('data-final');
        if(dataFinal.indexOf(',') > 0) {
            const values = dataFinal.toString().split(',');
            //vaciar de 0
            item.innerHTML = '';

            //crear DOM
            let numberDom = document.createElement('SPAN');
            numberDom.classList.add('js-number-dom');
            item.append(numberDom);

            let coma = document.createElement('SPAN');
            coma.innerHTML = ', ';
            coma.classList.add('js-decimal-coma');

            item.append(coma);

            let decimalDom = document.createElement('SPAN');
            decimalDom.classList.add('js-decimal-container');
            item.append(decimalDom);

            let value1 = values[0];
            let value2 = values[1];
            let counter1 = new CountUp(numberDom, value1, options);
            let counter2 = new CountUp(decimalDom, value2, options);
            counter1.start();
            counter2.start();
        }else {
            const value = parseFloat(dataFinal);
            const counter = new CountUp(item, value, options);
            counter.start();
        }
      });
    }
    let counterTrigger = document.querySelector('.js-counter-scroll-trigger');
    if(counterTrigger){
      new Waypoint({
        element: counterTrigger,
        handler: function() {
          countStart()
          this.destroy() //for once
        },
        offset: '50%'
      });
    }
}