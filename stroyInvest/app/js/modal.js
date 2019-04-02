/*функция для показа модальных окон*/
function modalFunc (e) {
  let idModal = this.dataset.forModalTarget;  
  let modal = document.getElementById(idModal);  
  let closeBtn = modal.querySelector('.modal-close');
  
  modal.classList.add('show-modal');
  closeBtn.onclick = function() {
  	modal.classList.remove('show-modal');
    };
}  

let modalBtns = document.querySelectorAll('.modal-btn');
modalBtns.forEach( function(el) {
  el.addEventListener('click', modalFunc);
});
