var number = prompt('Укажите число...');

var exponent = prompt('Укажите степень...');

function pow(number, exponent) {
    
    var result = 1;
    for(var i = 0; i < exponent; i++) {
    result *= number 
    };
    
    console.log('pow = ', result);
    return result;
};

pow(number, exponent);