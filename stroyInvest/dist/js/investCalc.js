
/*Калькулятор прибыли от капиталовложений*/
var rangeCalc = document.querySelector('.calc-range');
var interestRates = document.querySelectorAll('input[name="programms"]');
var outMonth = document.querySelector('.calc-monthly span');
var outAllSumm = document.querySelector('.calc-total span');
var summInMonth = document.querySelector('.calc-total small');

function calculator() {
  var src = document.querySelector('input[name="programms"]:checked');
  var startSum = +document.querySelector("#investSum").value;
  var month = +src.dataset.month;
  var per = +src.dataset.per;
  var monthlyIncome = +Math.round(startSum * per / 12);
  var total = monthlyIncome * month + startSum;
  outAllSumm.textContent = "".concat(total.toLocaleString(), " \u0440\u0443\u0431.");

  if (month == 24) {
    summInMonth.textContent = "\u0421\u0443\u043C\u043C\u0430 \u0447\u0435\u0440\u0435\u0437 ".concat(month, " \u043C\u0435\u0441\u044F\u0446\u0430");
  } else {
    summInMonth.textContent = "\u0421\u0443\u043C\u043C\u0430 \u0447\u0435\u0440\u0435\u0437 ".concat(month, " \u043C\u0435\u0441\u044F\u0446\u0435\u0432");
  }

  outMonth.textContent = "".concat(monthlyIncome.toLocaleString(), " \u0440\u0443\u0431.");
}

;
/*Изменение процентной ставки*/

interestRates.forEach(function (el) {
  el.addEventListener('change', calculator);
});
/*Изменение суммы инвестиций*/

rangeCalc.addEventListener('input', calculator);