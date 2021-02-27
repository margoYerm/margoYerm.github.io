//import {soundsStop} from './actionsFunctions.js';
const translaterInput = document.getElementById('translater-input');
const translaterSubmit = document.getElementById('translater-form');
const soundInpShort = document.getElementById('sound-inp-short');
let translaterValueMass = [];



function translateStart(evt) {
  evt.preventDefault();  
  let inputValue = translaterInput.value;  
  let counter = inputValue.length;  
  if (inputValue.length > 0) {    
    soundInpShort.play(); 
    counter--;     
    soundInpShort.addEventListener('ended', (event) => {    
      if (counter > 0) {
        soundInpShort.play();
        counter--;
        console.log(counter);
      }
      else {
        console.log('the end');
      }      
    })      
  } else {
    console.log('Введите фразу для перевода');
  }    
}

translaterSubmit.addEventListener('submit', translateStart);




const soundsBtnStop = document.querySelector('.button-stop');
const actionButtons = document.querySelectorAll('.button-koto.action-btn');
const soundsCat = document.querySelectorAll('.sound-cat');

function soundsStop() {  
  soundsCat.forEach( (elem) => {
    elem.pause();
  })
}

function soundPlay(et){
  soundsStop();
  let targetBtn = et.target;  
  let soundId = document.getElementById(targetBtn.dataset.forSound);  
  soundId.currentTime = 0;
  soundId.play();  
};

soundsBtnStop.addEventListener('click', soundsStop);
actionButtons.forEach( (el) => {
  el.addEventListener('click', soundPlay);
});
