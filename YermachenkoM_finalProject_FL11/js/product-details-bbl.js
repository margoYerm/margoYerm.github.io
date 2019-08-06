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
    console.log(activeSlide);
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

function addProduct(e) {
  counterBacketHdr++;
  backetHeader.innerHTML = counterBacketHdr;
  btnAddBag.innerHTML = 'Product Added';
  btnAddBag.classList.add('buyBtn');
}

btnAddBag.addEventListener('click', addProduct);