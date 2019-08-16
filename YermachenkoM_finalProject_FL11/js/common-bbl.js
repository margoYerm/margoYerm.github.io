"use strict";

//searching realization
var showSearchBtn = document.querySelector('.header-search-btn');
var searchRow = document.querySelector('.search-enter');
var searchInput = document.querySelector('.search-enter-inp');
var searchBtn = document.querySelector('.search-enter-btn');

function showSearch(e) {
  searchRow.classList.remove('hide');
  showSearchBtn.classList.add('hide');
}

function searching(e) {
  if (!searchInput.value.replace(/^\s+|\s+$/g, '')) {
    searchRow.classList.add('hide');
    showSearchBtn.classList.remove('hide');
  } else {
    window.location.href = 'category-all.html';
  }
}

showSearchBtn.addEventListener('click', showSearch);
searchBtn.addEventListener('click', searching);


//slider before footer realization
function SliderFP(obj) {
  this.sliderBlock = document.querySelector(obj.sliderBlock);
  this.sliderLine = document.querySelector(obj.sliderLine);
  this.sliderItems = document.querySelectorAll(obj.sliderItems);
  this.sliderBtnLeft = document.querySelector(obj.sliderBtnLeft);
  this.sliderBtnRight = document.querySelector(obj.sliderBtnRight);
  var widthBlock = this.sliderBlock.offsetWidth;
  var offset = 40;
  var widthLine = offset * 2;
  var arrWidthItems = [];
  var trigger = 0;
  var step = 0;
  var that = this;

  for (var i = 0; i < this.sliderItems.length; i++) {
    arrWidthItems.push(this.sliderItems[i].offsetWidth);
    widthLine += this.sliderItems[i].offsetWidth;
  }

  var maxScrollRight = widthBlock - widthLine + that.sliderItems[step].offsetWidth;
  var maxScrollLeft = -that.sliderItems[step].offsetWidth;

  var moveRight = function moveRight() {
    if (trigger > maxScrollRight) {
      trigger = trigger - that.sliderItems[step].offsetWidth;
      that.sliderLine.style.marginLeft = trigger + 'px';
      step++;
    } else {
      trigger = widthBlock - widthLine;
      that.sliderLine.style.marginLeft = trigger + 'px';
    }
  };

  var moveLeft = function moveLeft() {
    if (trigger < maxScrollLeft) {
      trigger = trigger + that.sliderItems[step].offsetWidth;
      that.sliderLine.style.marginLeft = trigger + 'px';
      step--;
    } else {
      trigger = 0;
      that.sliderLine.style.marginLeft = trigger + 'px';
    }
  };

  this.sliderBtnRight.addEventListener('click', moveRight);
  this.sliderBtnLeft.addEventListener('click', moveLeft);
}

var sliderMainPage = new SliderFP({
  sliderBlock: '.slider-block',
  sliderLine: '.slider-container',
  sliderItems: '.slider-container > a',
  sliderBtnLeft: '.slider-btn_left',
  sliderBtnRight: '.slider-btn_right'
});