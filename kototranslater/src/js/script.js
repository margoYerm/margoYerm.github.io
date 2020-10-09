let translaterInput = document.getElementById('translater-input');
let translaterSubmit = document.getElementById('translater-form');
let soundInpShort = document.getElementById('sound-inp-short');
let translaterValueMass = [];
function collwithTime (func, i) {
  /*let fn = function() {
    return method.apply(null, args);
  }
  return setTimeout(fn, seconds * 1000);*/
  window.setTimeout(function(){
    func();
  }, 1000 *i);
}

function translateStart(evt) {
  evt.preventDefault();
  //console.log('мяу');
  let inpVal = translaterInput.value;  
  if (inpVal.length > 0) {
    console.log(inpVal.length)
    let counterTimes = inpVal.length;    
    let count = 0;  
    let intervalId = setInterval(function(){
      if(count == counterTimes+1) {
        clearInterval(intervalId);
        count = 0;
      }
      soundInpShort.play();
      count++;
    }, 1001) ;

    /*for (let i = 0; i < counterTimes; i++) {
      console.log(i);
      let g = count;
      for (let j = 0; j < g; j++) {
        collwithTime(soundInpShort.play(), count, i, j);
        count++;
      }
      //setTimeout(() => soundInpShort.play(), 1000);
      //soundInpShort.play()
    }*/
    
  } else {
    console.log('Введите фразу для перевода');
  }
  
}

translaterSubmit.addEventListener('submit', translateStart);




let stopSoundsBtn = document.querySelector('.button-stop');
let actionButtons = document.querySelectorAll('.button-koto.action-btn');
let soundsCat = document.querySelectorAll('.sound-cat');
function stopSounds(el) {
  soundsCat.forEach( (elem) => {
    elem.pause();
  })
}
function soundPlay(et){
  stopSounds();
  let targetBtn = et.target;  
  let soundId = document.getElementById(targetBtn.dataset.forSound);  
  soundId.currentTime = 0;
  soundId.play();  
};
stopSoundsBtn.addEventListener('click', stopSounds);
actionButtons.forEach( (el) => {
  el.addEventListener('click', soundPlay);
});
