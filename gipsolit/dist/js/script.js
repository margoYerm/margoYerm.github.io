$(document).ready(function(){

  new WOW().init();

  /*Слайдер с отзывами*/
  $('.feedback-slider').slick({
    prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="../images/feedBack/leftArrow.svg"/></button>',
    nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="../images/feedBack/rightArrow.svg"/></button>'
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

    
  function popupFunc(e) {
    var idPop = this.dataset.forPopupTarget;
    var modal = document.getElementById(idPop);
    var closeBtn = modal.querySelector('.popup-close');
    modal.classList.add('showPopap');

    closeBtn.onclick = function () {
      modal.classList.remove('showPopap');
    };
  }

  var popupBtns = document.querySelectorAll('.popup-btn');
  popupBtns.forEach(function (el) {
    el.addEventListener('click', popupFunc);
  });

});

