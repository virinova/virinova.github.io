
(function () {

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}




var x = prompt("x?", '');
var n = prompt("n?", '');

 if (isNaN(x)|| n <= 0) {
      alert('Некорректное число');
      return (x);
    }
  else  {
  alert(pow(x, n));
  console.log(pow(x, n));
  }

})();