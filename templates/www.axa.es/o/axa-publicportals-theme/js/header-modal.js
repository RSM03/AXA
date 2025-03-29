let headerCalcButton = document.getElementsByClassName('js-calcula-seguro')[0];
let  calcModal = document.getElementsByClassName('c-calc-modal')[0];
let calcModalControl = false;
let bodyC = document.getElementsByTagName('body')[0];
let closeHeaderModal = document.getElementsByClassName('js-close-header')[0];
 $( document ).ready(function() {
 if(headerCalcButton!=null){
     headerCalcButton.onclick=function(e){
         e.preventDefault();
         if(calcModalControl == false) {
             calcModal.classList.add('active');
             calcModalControl = true;
             bodyC.classList.add('open-calc-modal');
         }else {
             calcModal.classList.remove('active');
             calcModalControl = false;
             bodyC.classList.remove('open-calc-modal');
         }
     }
 }
 if(closeHeaderModal!=null){
        closeHeaderModal.onclick=function(e) {
            e.preventDefault();

            calcModal.classList.remove('active');
            calcModalControl = false;
            bodyC.classList.remove('open-calc-modal');
        }
    }
});