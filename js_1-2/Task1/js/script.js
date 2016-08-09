var a = prompt('Укажите число...');

var b = prompt('Укажите степень...');

function pow(a, b) {
    
    var result = 1;
    for(var i = 0; i < b; i++) {
    result *= a 
    
    };
    
    console.log('pow = ', result);
    return result;
};

pow(a, b);