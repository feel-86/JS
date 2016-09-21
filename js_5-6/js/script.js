var milisec = makeCounter();
var sec = makeCounter();
var minute = makeCounter();
var hour = makeCounter(); 

function makeCounter() {
   var count = 0;

   return function () {
      return count++;
   }
}


var el = document.getElementsByClassName("");
var millCounter = 0;
var secCounter = 0;
var minCounter = 0;

setInterval(function() {
  millCounter = milisec();

  if(millCounter === 1000){
    milisec = makeCounter();
    secCounter = sec();
  }
  if(secCounter === 36000){
     sec = makeCounter();
     minCounter = minute();
  }


}, 1);

 





//    var milisec = 0;
// };

// var startSec = function () {
//    var sec = 0;
// };

// var startHour = function () {
//    var hour = 0;
// };

