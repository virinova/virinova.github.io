'use strict';

var data = {
  title: 'Тест по программированию',
  questions: [{
      title: 'Вопрос №1',
      answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
    },
    {
      title: 'Вопрос №2',
      answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
    },
    {
      title: 'Вопрос №3',
      answers: ['Вариант овтета 1', 'Вариант ответа 2']
    },
    {
      title: 'Вопрос №4',
      answers: ['Вариант ответа 1', 'Вариант овтета 2', 'Вариант ответа 3']
    }
  ],
  getTitle: function () {
    console.log('из get title: ', this.title);
  }
};

data.getTitle();

// создает болванку-конейтнер под тест (тег form)
// заголовок
// кнопку
function createTest(obj) {
  var form = document.createElement('form'),
    formHeader = document.createElement('h1'),
    btn = document.createElement('button'),
    questionList = document.createElement('ol');

    form.classList.add('form');

  formHeader.textContent = obj.title;
  btn.textContent = 'Проверить мои результаты';

  for (var i = 0; i < obj.questions.length; i++) {
    var question = createQuestion(obj.questions[i]);
    questionList.appendChild(question);
  }

  form.appendChild(formHeader);
  form.appendChild(questionList);
  form.appendChild(btn);

  return form;
}

function createQuestion(obj) {
  var question = document.createElement('li'),
    questionTitle = document.createElement('h2'),
    list = document.createElement('ul');

  questionTitle.textContent = obj.title;

  for (var i = 0; i < obj.answers.length; i++) {
    var el = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    var label = document.createElement('label');
    label.textContent = obj.answers[i];

    el.appendChild(checkbox);
    el.appendChild(label);

    list.appendChild(el);
  }

  question.appendChild(questionTitle);
  question.appendChild(list);

  return question;
}

var root = document.getElementById('root'),
  form = createTest(data);

root.appendChild(form);
