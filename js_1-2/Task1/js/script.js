var number = prompt('Укажите целое число большее, меньшее или равное нулю...');

var exponent = prompt('Укажите степень...');
    
function pow(number, exponent) {

	  number = Number(parseInt(number));
	  exponent = Number(parseInt(exponent));
/*	  if (isNaN(number) || isNaN(exponent))
		 return 'Неправильное число'; */

    var result = 1;
    for(var i = 0; i < exponent; i++) {
    result *= number 
    };
    
    console.log('pow = ', result);
    return result;
};

pow(number, exponent);