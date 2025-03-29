const questionExpand = ()=> {
    const buttonExpand = document.getElementsByClassName('js-open-card');
    const rotateIcon = document.getElementsByClassName('js-rotate-icon');
    const expanded = document.getElementsByClassName('js-answer-block');

    let questionAcordeon = document.getElementsByClassName('c-question-acordeon');
    if(questionAcordeon.length > 0 ) {

    for(let i = 0; i < buttonExpand.length; i++) {
        buttonExpand[i].onclick=function() {
          let dataOpen = expanded[i].getAttribute('data-open');
          if(dataOpen == 'false') {
              for(let k = 0; k < expanded.length; k++) {
                  expanded[k].classList.remove('active');
                  expanded[k].setAttribute('data-open','false');
                  rotateIcon[k].classList.remove('rotate');
              }
              expanded[i].classList.add('active');
              rotateIcon[i].classList.add('rotate');
              expanded[i].setAttribute('data-open','true');
          }else {
              expanded[i].classList.remove('active');
              expanded[i].setAttribute('data-open','false');
              rotateIcon[i].classList.remove('rotate');
          }
        }
    }
    for(let i = 0; i < rotateIcon.length; i++) {
      rotateIcon[i].onclick=function() {
        let dataOpen = expanded[i].getAttribute('data-open');
        if(dataOpen == 'false') {
          for(let k = 0; k < expanded.length; k++) {
              expanded[k].classList.remove('active');
              expanded[k].setAttribute('data-open','false');
              rotateIcon[k].classList.remove('rotate');
          }
          expanded[i].classList.add('active');
          rotateIcon[i].classList.add('rotate');
          expanded[i].setAttribute('data-open','true');
        }else {
          expanded[i].classList.remove('active');
          expanded[i].setAttribute('data-open','false');
          rotateIcon[i].classList.remove('rotate');
        }
      }
    }
  }
}

questionExpand();
