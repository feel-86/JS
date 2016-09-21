//              НОВЫЙ КОД
// Возведение целого числа base в целую степень exponent
function pow(number, exponent) {
// Проверка введенных данных на соответствие целому числу
 if (!checkNatural(number) || !checkNatural(exponent) || !isNumeric(number) || !isNumeric(exponent)) {
   return NaN;
 }
 var result = number;
// Циклом умножаем основание на себя |exponent|-раз
 for (var i = 1; i < Math.abs(exponent); i++) {
   result *= number;
 }
// Учитываем отрицательную степень. Если степень отрицательная, то 1/result
 if (exponent < 0) {
   result = (1 / result).toFixed(2);
 } else if (( +number != 0) && (+exponent === 0)) { // Если степень равна нулю, то результат всегда равен 1
   result = 1;
 }
 return result;
}
// Проверка на число
function isNumeric(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
}

// Проверка на наличие дробной части
function checkNatural(x) {
 return (parseInt(x) == x);
}
// Блок выполнения. Запрос данных
var number = prompt('Введите целое значение основания:', '');
var exponent = prompt('Введите целое значение степени:', '');
// Если результат функции - число, то выводим
if (isNumeric(pow(number, exponent))) {
 alert(number + ' ^ ' + exponent + ' = ' + pow(number, exponent));
} else { //Иначе сообщение об ошибке
 alert('Что-то пошло не так! Проверьте введенные данные');
}



//                  СТАРЫЙ КОД
/* function pow(number, exponent) {

	  number = Number(parseInt(number) ^ 0);
	  exponent = Number(parseInt(exponent) ^ 0);

    var result = 1;
    for(var i = 0; i < exponent; i++) {
    result *= number 
    };
    
    return result;
}

var number = prompt('Укажите целое число большее, меньшее или равное нулю...');

var exponent = prompt('Укажите степень...');

if (isNaN(number)) {
	alert('Wrong number! It is not a number!'
		);
} else if (isNaN(exponent)) {
  alert('Wrong exponent! It is not a number!'
    );
} else {
  alert( pow(number, exponent) );
}
*/
