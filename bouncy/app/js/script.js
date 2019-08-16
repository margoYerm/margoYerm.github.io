window.onload = function() {

	//adaptive menu
	let menuBtn = document.querySelector('.menu-btn');
	let menuList = document.querySelector('.top-nav-menu');
	menuBtn.addEventListener('click', function(){
		menuList.classList.toggle('show');
		console.log(8);
	}) 

	//progress circles
	let prBranding = new RadialProgress(document.getElementById("progress_branding"), {
		progress: 0.8, 
		colorBg:"#047378",
		colorFg: "#19bd9a",
		colorText: "#81868e",
		thick: 3
	} );
	let prDesign = new RadialProgress(document.getElementById("progress_design"), {
		progress: 0.75, 
		colorBg:"#047378",
		colorFg: "#19bd9a",
		colorText: "#81868e",
		thick: 3
	} );
	let prUi = new RadialProgress(document.getElementById("progress_ui"), {
		progress: 0.6, 
		colorBg:"#047378",
		colorFg: "#19bd9a",
		colorText: "#81868e",
		thick: 3
	} );

	/*function Slider(obj) {
		this.slides = document.querySelectorAll(obj.slides);
		this.dots = document.querySelectorAll(obj.dots);
		this.show = obj.showClass;	
		let context = this;
		let curentSlide = 0;
		this.relay = function() {
			context.curentSlide.classList.remove(show);
			curentSlide = context.dataset.for;
			context.slides[i].classList.add(show);
		};
		dots.forEach( function(el) {
			el.onclick.relay;
		});
	}

	let teamSlider = new Slider ({
		slides: 'team-person',
		dots: 'team-slider_dot',
		show: 'team-person_showed'
	});*/

}