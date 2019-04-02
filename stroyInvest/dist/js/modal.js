/*функция для показа модальных окон*/
"use strict";

function modalFunc(e) {
  var idModal = this.dataset.forModalTarget;
  var modal = document.getElementById(idModal);
  var closeBtn = modal.querySelector('.modal-close');
  modal.classList.add('show-modal');

  closeBtn.onclick = function () {
    modal.classList.remove('show-modal');
  };
}

var modalBtns = document.querySelectorAll('.modal-btn');
modalBtns.forEach(function (el) {
  el.addEventListener('click', modalFunc);
});