var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push( prompt('Введите любое имя...', '') );
}

var name = prompt('Введите имя пользователя...', '');

var login;
for (var i = 0; i < arr.length; i++) {
   if (name == arr[i]) {
        login = name;
    }
}

if (login != undefined) {
    alert(login + ', Вы успешно вошли!');
}
else {
    alert('Такого пользователя не существует!');
}