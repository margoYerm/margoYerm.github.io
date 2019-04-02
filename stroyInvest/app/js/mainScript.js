window.onload = function(){

	/*подключение слайдера для направлений деятельности большие экраны*/
	$('.direction-blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		responsive: [
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1}
	    },
	    {
	    	breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1}
	    },
	    {
	    	breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2}
	    }	    	    
	  ]
	});

	let menuBtn = document.querySelector('.top-nav_btn');
	let menu = document.querySelector('.top-nav_menu');	
		
	/*показывает меню в мобильной версии*/
	menuBtn.onclick = function () {
		event.preventDefault();
		menu.classList.toggle('top-nav_menu__active');
	} 	

	let sidebarBtn = document.querySelector('.left-sidebar_btn');
	let sidebarMenu = document.querySelector('.left-sidebar_menu');
	/*показывает категории в мобильной версии*/
	sidebarBtn.onclick = function () {
		event.preventDefault();
		sidebarMenu.classList.toggle('left-sidebar_menu__active');
	}
}