﻿$(document).ready(function(){

  new WOW().init();

  /*Слайдер с отзывами*/
  $('.feedback-slider').slick({
    prevArrow: '<button class="feedback-slider-btn feedback-prev-btn"></button>',
    nextArrow: '<button class="feedback-slider-btn feedback-next-btn"></button>'
  });

   /*Слайдер с приемуществами*/
  $('.advantages-slider').slick({
    infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 960,
      settings: {      	
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'       
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    }    
  ]
  });


  /*Слайдер с материалами*/
  $('.materials-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 960,
      settings: {       
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'       
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    }    
  ]
  });

  /*Маска для форм maskedinput*/
  jQuery(function($){    
    $("input[type = 'tel']").mask("+38 (999) 999-99-99");    
  });


  function popupFunc (e) {
    let idPop = this.dataset.forPopupTarget;  
    let modal = document.getElementById(idPop);  
    let closeBtn = modal.querySelector('.popup-close');
  
    modal.classList.add('showPopap');
    closeBtn.onclick = function() {
      modal.classList.remove('showPopap');
    };
  }  

  let popupBtns = document.querySelectorAll('.popup-btn');
  popupBtns.forEach( function(el) {
    el.addEventListener('click', popupFunc);
  });

/*[...document.querySelectorAll('.btn')]
  .forEach(btn => btn.addEventListener('click', popupFunc));*/

  

});

