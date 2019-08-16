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
let sizesShoes = document.getElementsByClassName('size-style');

function addProduct (e) {
	let elTarget = document.querySelector('input[name="pr-sz"]:checked');	
	if (elTarget !== null) {
		counterBacketHdr++;
		backetHeader.innerHTML = counterBacketHdr;
		btnAddBag.innerHTML = 'Product Added';
		btnAddBag.classList.add('buyBtn');
	} else {
		alert('Please select a size');
	}	
}
function resetProduct (e) {
	btnAddBag.innerHTML = 'Add to card';
	btnAddBag.classList.remove('buyBtn');
}

btnAddBag.addEventListener('click', addProduct);
Array.from(sizesShoes).forEach((el) => el.addEventListener('click', resetProduct));