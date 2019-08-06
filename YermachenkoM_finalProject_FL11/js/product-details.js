//slider for products
function sliderProduct (object) {
	this.slideImg = document.getElementsByClassName(object.slideImg);
	this.slideLink = document.getElementsByClassName(object.slideLink);
	let activeSlide = 0;
	let that = this;
	let changer = function (e) {
		that.slideImg[activeSlide].classList.add('hide');
		that.slideLink[activeSlide].classList.remove('activePr');
		activeSlide = Array.from(that.slideLink).indexOf(e.target);		
		console.log(activeSlide);
		that.slideImg[activeSlide].classList.remove('hide');
		that.slideLink[activeSlide].classList.add('activePr');
	}
	Array.from(that.slideLink).forEach((el) => el.addEventListener('click', changer));		
}


let product1 = new sliderProduct ({
	slideImg: 'product-view-slide',
	slideLink: 'product-view-link'
});

/*Add products to backet*/
let backetHeader = document.getElementById('backet-counter');
let btnAddBag = document.getElementById('addProduct');
let counterBacketHdr = 0;

function addProduct (e) {
	counterBacketHdr++;
	backetHeader.innerHTML = counterBacketHdr;
	btnAddBag.innerHTML = 'Product Added';
	btnAddBag.classList.add('buyBtn');
}

btnAddBag.addEventListener('click', addProduct);
