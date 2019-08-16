"use strict";

//slider for products
function sliderProduct(object) {
  this.slideImg = document.getElementsByClassName(object.slideImg);
  this.slideLink = document.getElementsByClassName(object.slideLink);
  var activeSlide = 0;
  var that = this;

  var changer = function changer(e) {
    that.slideImg[activeSlide].classList.add('hide');
    that.slideLink[activeSlide].classList.remove('activePr');
    activeSlide = Array.from(that.slideLink).indexOf(e.target);    
    that.slideImg[activeSlide].classList.remove('hide');
    that.slideLink[activeSlide].classList.add('activePr');
  };

  Array.from(that.slideLink).forEach(function (el) {
    return el.addEventListener('click', changer);
  });
}

var product1 = new sliderProduct({
  slideImg: 'product-view-slide',
  slideLink: 'product-view-link'
});
/*Add products to backet*/

var backetHeader = document.getElementById('backet-counter');
var btnAddBag = document.getElementById('addProduct');
var counterBacketHdr = 0;
var sizesShoes = document.getElementsByClassName('size-style');

function addProduct(e) {
  var elTarget = document.querySelector('input[name="pr-sz"]:checked');

  if (elTarget !== null) {
    counterBacketHdr++;
    backetHeader.innerHTML = counterBacketHdr;
    btnAddBag.innerHTML = 'Product Added';
    btnAddBag.classList.add('buyBtn');
  } else {
    alert('Please select a size');
  }
}

function resetProduct(e) {
  btnAddBag.innerHTML = 'Add to card';
  btnAddBag.classList.remove('buyBtn');
}

btnAddBag.addEventListener('click', addProduct);
Array.from(sizesShoes).forEach(function (el) {
  return el.addEventListener('click', resetProduct);
});s