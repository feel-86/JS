var body = document.querySelector('body');

var header = document.createElement('div');
header.classList.add('header');

var headerText = document.createElement('h1');
headerText.innerHTML = 'Тест по программированию';
header.appendChild(headerText);

body.appendChild(header);

var content = document.createElement('div');
header.classList.add('content');

var ol = document.createElement('ol');
ol.classList.add('mainList');

for (var i = 1; i <= 3; i++) {
   var li = document.createElement('li');
   li.innerHTML = 'Вопрос № ' + i;
   ol.appendChild(li);
   for (var j = 1; j <=3; j++) {
   var label = document.createElement('label');
   label.setAttribute('for', 'input' + j)
   label.innerHTML = 'Вариант ответа № ' + j;

   var checkBox = document.createElement('input');
   checkBox.setAttribute('type', 'checkbox');
   checkBox.setAttribute('id', 'input' + j);
   checkBox.classList.add('checkbox-inline');

   li.appendChild(checkBox);
   li.appendChild(label);
  }
}

var button = document.createElement('button');
button.classList.add('btn');
button.classList.add('btn-primary');
button.innerHTML = 'Проверить мои результаты';


content.appendChild(ol);

content.appendChild(button);

body.appendChild(content);
