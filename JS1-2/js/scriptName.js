
(function () {
'use strict';

var arrName = [];
for (var i = 0; i < 5; i++) {
	arrName.push(prompt('Введите имя пользователя', ''));
}

var Username = prompt('Введите ваше имя', '');


function checker(aName, name) {
	for (var i = 0; i < arrName.length; i++){
		if (name === arrName[i]){
		return true;
		break;
		
		}
	}
}

if (checker(arrName, Username)){
		alert(Username + ' Вы успешно вошли!', '');
		}else {
		alert('Ошибочка вышла!', '');
	}

})();