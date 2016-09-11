 function pow(number, exponent) {

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