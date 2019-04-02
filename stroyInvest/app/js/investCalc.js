
/*Калькулятор прибыли от капиталовложений*/		
let rangeCalc = document.querySelector('.calc-range');	
let interestRates = document.querySelectorAll('input[name="programms"]');
let outMonth = document.querySelector('.calc-monthly span');
let outAllSumm = document.querySelector('.calc-total span');
let summInMonth = document.querySelector('.calc-total small');

function calculator () {		
	let src = document.querySelector('input[name="programms"]:checked');
	let startSum =+document.querySelector("#investSum").value;
	let month = +src.dataset.month;
	let per = +src.dataset.per;
	let monthlyIncome = +Math.round(startSum * per / 12);
	let total = (monthlyIncome * month) + startSum;
				
	outAllSumm.textContent = `${total.toLocaleString()} руб.`;
	if(month==24) {
   	summInMonth.textContent = `Сумма через ${month} месяца`;
  } else {
   	summInMonth.textContent = `Сумма через ${month} месяцев`;
  }﻿
	outMonth.textContent = `${monthlyIncome.toLocaleString()} руб.`;
};	

/*Изменение процентной ставки*/
interestRates.forEach( function(el) {
	el.addEventListener('change', calculator);
});
/*Изменение суммы инвестиций*/
rangeCalc.addEventListener('input', calculator);
