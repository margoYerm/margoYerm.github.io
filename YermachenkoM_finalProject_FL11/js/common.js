//searching realization
const showSearchBtn = document.querySelector('.header-search-btn');
const searchRow = document.querySelector('.search-enter');
const searchInput = document.querySelector('.search-enter-inp');
const searchBtn = document.querySelector('.search-enter-btn');
function showSearch (e) {
	searchRow.classList.remove('hide');
	showSearchBtn.classList.add('hide');
} 
function searching (e) {
	if (!searchInput.value.replace(/^\s+|\s+$/g, '')){
    searchRow.classList.add('hide');
    showSearchBtn.classList.remove('hide');
  } else {
  	window.location.href = 'category-all.html';
  }
}
showSearchBtn.addEventListener('click', showSearch);
searchBtn.addEventListener('click', searching);

//slider before footer realization
function SliderFP (obj) {
	this.sliderBlock = document.querySelector(obj.sliderBlock);
	this.sliderLine = document.querySelector(obj.sliderLine);
	this.sliderItems = document.querySelectorAll(obj.sliderItems);
	this.sliderBtnLeft = document.querySelector(obj.sliderBtnLeft);
	this.sliderBtnRight = document.querySelector(obj.sliderBtnRight);
	let widthBlock = this.sliderBlock.offsetWidth;
	let offset = 40;
	let widthLine = offset * 2;
	let arrWidthItems = [];
	let trigger = 0;
	let step = 0;
	let that = this;		
	for (let i = 0; i < this.sliderItems.length; i++) {
		arrWidthItems.push(this.sliderItems[i].offsetWidth);
		widthLine += this.sliderItems[i].offsetWidth;
	}
	let maxScrollRight = widthBlock - widthLine + that.sliderItems[step].offsetWidth;
	let maxScrollLeft = -that.sliderItems[step].offsetWidth;
	let moveRight = function () {		
		if (trigger > maxScrollRight) {
			trigger = trigger - that.sliderItems[step].offsetWidth;			
			that.sliderLine.style.marginLeft = trigger + 'px';
			step++;
		} else {
			trigger = widthBlock - widthLine;
			that.sliderLine.style.marginLeft = trigger + 'px';
		}		
	}
	let moveLeft = function () {		
		if (trigger < maxScrollLeft) {
			trigger = trigger + that.sliderItems[step].offsetWidth;			
			that.sliderLine.style.marginLeft = trigger + 'px';
			step--;
		} else {
			trigger = 0;
			that.sliderLine.style.marginLeft = trigger + 'px';
		}
	}
	this.sliderBtnRight.addEventListener('click', moveRight);
	this.sliderBtnLeft.addEventListener('click', moveLeft);	
}	

let sliderMainPage = new SliderFP ({
	sliderBlock: '.slider-block',
	sliderLine: '.slider-container',
	sliderItems: '.slider-container > a',
	sliderBtnLeft: '.slider-btn_left',
	sliderBtnRight: '.slider-btn_right'
});

