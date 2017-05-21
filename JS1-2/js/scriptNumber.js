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
var num1 = parseInt(x);

 if (isNaN(x)) {
      alert('Некорректное число');
      return (x);
    }
if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert(pow(x, n));
  console.log(pow(x, n));
}

})();


