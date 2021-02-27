/*Scroll animation start*/
let animationSections = document.querySelectorAll('.animation-section');

function showSvgAnimation(el) {
	let coords = el.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;
	let visible = (coords.top + (coords.height / 2)) > 0 && (coords.top + (coords.height / 2)) < windowHeight;	
	if(visible) {
		el.classList.add('animate');
	}	
}

function startSvgAnimations() {
	Array.from(animationSections).forEach((elem) => {
		if (!elem.classList.contains('animate')) {			
			showSvgAnimation(elem);		
		}
	})
}

startSvgAnimations();
window.addEventListener('scroll', startSvgAnimations);



	

/*Slider class and initialization*/

function drawArc(xPos, yPos, radius, startAngle, endAngle, anticlockwise, lineColor, fillColor) {
    const canvasMY = document.getElementById('arc-rotate');
    let startAngleF = startAngle * (Math.PI / 180);
    let endAngleF = endAngle * (Math.PI / 180);
    let radiusF = radius;
    let contentCanvas = canvasMY.getContext('2d');
    contentCanvas.strokeStyle = lineColor;
    contentCanvas.fillStyle = fillColor;
    contentCanvas.lineWidth = 3;
    contentCanvas.beginPath();
    contentCanvas.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
    contentCanvas.fill();
    contentCanvas.stroke();
}


function SliderCircle(obj) {
  this.liItems = document.getElementsByClassName(obj.liItems);
  this.slidesDescriptions = document.getElementsByClassName(obj.slidesDescriptions);
  this.btnTop = document.querySelector(obj.btnTop);
  this.btnBottom = document.querySelector(obj.btnBottom);
  this.canvasMY = document.getElementById(obj.canvasMY);

  let arrElems = []; 
	let arrElemsData = [];
  for (let i = 0; i < this.liItems.length; i++) {
    arrElems.push(this.liItems[i].getAttribute("class"));            
    arrElemsData.push(this.slidesDescriptions[i].getAttribute("class"));
  }

  let counter = 0;
  const radius = 360;
  let indexRotate = (radius / arrElems.length).toFixed(0);
  let currentDeg = 0;

  let cycleForBottomAndTop = () => {
    for (let i = 0; i < this.liItems.length; i++) {
      this.liItems[i].className = arrElems[i];
      this.slidesDescriptions[i].className = arrElemsData[i];
    }
  }

  let toBottom = () => {
    let lastItem = arrElems[0];
    let lastDescription = arrElemsData[0];
    arrElems.shift();
    arrElemsData.shift();
    arrElems.push(lastItem);
    arrElemsData.push(lastDescription);
    counter < arrElems.length ? counter++ : counter = 1;    
    cycleForBottomAndTop();
    currentDeg += +(indexRotate);
    this.canvasMY.style.transform = `rotate(${currentDeg}deg)`;
  }

  let toTop = () => {
    let firstItem = arrElems[arrElems.length -1];
    let firstDescription = arrElemsData[arrElemsData.length - 1];
    arrElems.pop();
    arrElemsData.pop();
    arrElems.unshift(firstItem);
    arrElemsData.unshift(firstDescription);
    counter - 1 ? counter-- : counter = arrElems.length;    
    cycleForBottomAndTop();
    currentDeg = currentDeg - +(indexRotate);
    this.canvasMY.style.transform = `rotate(${currentDeg}deg)`;
  }

  let showAuto = setInterval(() => {
    if(counter < arrElems.length + 1) {
      requestAnimationFrame(toBottom);
      counter++;
    } else {
      cancelAuto();
    }
  }, 5000);

  let cancelAuto = () => {
    clearInterval(showAuto);
  }
  //window.requestAnimationFrame(showAuto);
  
  this.btnBottom.addEventListener('click', cancelAuto);
  this.btnBottom.addEventListener('click', toBottom);
  this.btnTop.addEventListener('click', cancelAuto);
  this.btnTop.addEventListener('click', toTop);
}

let arcIndicator = this.drawArc(92, 92, 90, -40, 66, true, '#E34713', 'transparent');

const sliderParams = {
	liItems: 'slider-point-name',
	slidesDescriptions: 'slider-point-description',
	btnTop: '.slider-btn-top',
	btnBottom: '.slider-btn-bottom',
	canvasMY: 'arc-rotate'
}

const sliderElement = new SliderCircle(sliderParams);



/*Hearts script*/
const heartsColors = [
  'rgba(70, 120, 253, 0.72)', //lightblue
  'rgba(4, 118, 148, 1)', //blue
  'rgba(149, 70, 253, 0.79)', //lightpurple
  'rgba(112, 19, 112, 1)', //violet
  'rgba(253, 70, 70, 0.81)', //salmon
  'rgba(175, 46, 66, 0.67)', //red
  'rgba(117, 196, 154, 1)', //green
  'rgba(255, 183, 15, 0.6)' //yellow
]

function rand (min, max) {
  let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randInt;
}

const heartsWrapper = document.querySelector('.hearts-wrapper');
const heartsBtn = document.querySelector('.hearts-btn');
const minAmountHeartsForSet = 20;
const maxAmountHeartsForSet = 35;
let massForHeartsWrapper = [];
let massWithCurrentSet = [];

function createDivForHeart (counterIdSet, counterIdElem) {
  let heartParams = {};
  let divEl = document.createElement('div');
  divEl.classList.add('heart-wrap');
  heartParams.divId = `heart-wrap-${counterIdSet}-${counterIdElem}`;
  divEl.id = heartParams.divId;
  let canvasEl = document.createElement('canvas');
  heartParams.canvasId = `heart-elem-${counterIdSet}-${counterIdElem}`;
  canvasEl.id = heartParams.canvasId;
  canvasEl.width = "30";
  canvasEl.height = "28";
  divEl.appendChild(canvasEl);  
  const minTop = 88;
  const maxTop = -8;
  heartParams.top = rand(minTop, maxTop);
  heartParams.left = countPositionLeftOfHart(heartParams.top);  
  return {
    data: heartParams,
    element: divEl
  };
}

function drawHart(hartElem, hartColor) {
  let canvas = document.getElementById(hartElem);  
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = hartColor;
    ctx.strokeStyle = hartColor;
    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(15, 8);
    ctx.bezierCurveTo(15, 7.4, 14, 5, 10, 5);
    ctx.bezierCurveTo(4, 5, 4, 12.5, 4, 12.5);
    ctx.bezierCurveTo(4, 14, 4, 18.5, 14.5, 24);
    ctx.bezierCurveTo(22, 20.4, 26, 16, 26, 12.5);
    ctx.bezierCurveTo(26, 12.5, 26, 5, 20, 5);
    ctx.bezierCurveTo(17, 5, 15, 7.4, 15, 8);
    ctx.fill();
  }
}

let numForSet = 0;
let amountHeartForCurrentSet = 0;
let colorForHeart = 0;
let counterForChangePosition = 0;
let counterForChangeOpacity = 0;
const cleanStep = 10;
let cleanForSaveID = 0;
let removedElements = 0;
const movingTime = 2000;

function createSetOfHearts () {    
  let numForHeart = 0;
  amountHeartForCurrentSet = rand(minAmountHeartsForSet, maxAmountHeartsForSet);
  for (let i = 0; i < amountHeartForCurrentSet; i++) {
    let targetElem = createDivForHeart(numForSet, numForHeart).element;
    heartsWrapper.appendChild(targetElem);      
    if (colorForHeart >= heartsColors.length) {
      colorForHeart = 0;
    };
    massWithCurrentSet.push(createDivForHeart(numForSet, numForHeart).data);     
    drawHart(`heart-elem-${numForSet}-${i}`, heartsColors[colorForHeart]);    
    numForHeart++;
    colorForHeart++;
  }    
  numForSet++;
  massForHeartsWrapper.push(massWithCurrentSet);
  massWithCurrentSet = [];
  setTimeout(() => changeHeartPosition(), 20);
  setTimeout(() => fadeOutHeart(), movingTime - 1500);
  cleanHTML();  
}

function changeHeartPosition () {    
  for (let i = 0; i < massForHeartsWrapper[counterForChangePosition].length; i++) {    
    let movingHeart = document.getElementById(`${massForHeartsWrapper[counterForChangePosition][i].divId}`);    
    movingHeart.style.top = `${massForHeartsWrapper[counterForChangePosition][i].top}%`;
    movingHeart.style.left = `${massForHeartsWrapper[counterForChangePosition][i].left}%`;    
  }
  counterForChangePosition++;  
}

function fadeOutHeart() { 
  for (let i = 0; i < massForHeartsWrapper[counterForChangeOpacity].length; i++) {
    let transparentHeart = document.getElementById(`${massForHeartsWrapper[counterForChangeOpacity][i].divId}`);
    transparentHeart.style.opacity = 0;
  }
  counterForChangeOpacity++;
}
heartsBtn.addEventListener('click', createSetOfHearts);

function cleanHTML () { 
  if (cleanForSaveID > cleanStep) {
    for (let i = 0; i < massForHeartsWrapper[removedElements].length; i++) {
      let removeTarget = document.getElementById(`${massForHeartsWrapper[removedElements][i].divId}`);
      heartsWrapper.removeChild(removeTarget);
    }
    removedElements++;
    cleanForSaveID++;
  } else {
    cleanForSaveID++;
	} 
}

function countPositionLeftOfHart (top) {  
  let left = 0;    
  if (top <= 88 && top > 80) {
    left = rand (44, 56);
  } else if (top <= 80 && top > 70) {
    left = rand (40, 60);
  } else if (top <= 70 && top > 60) {
    left = rand (36, 64);
  } else if (top <= 60 && top > 50) {
    left = rand (32, 68);
  } else if (top <= 50 && top > 40)  {
    left = rand (28, 72);
  } else if (top <= 40 && top > 30) {
    left = rand (23, 77);
  } else if (top <= 30 && top > 20) {
    left = rand (19, 81);
  } else if (top <= 20 && top > 10) {
    left = rand (15, 85);
  } else if (top <= 10 && top > 0) {
    left = rand (10, 90);
  } else if (top <= 0 && top > -9) {
    left = rand (5, 95);
  }
  return left;  
}