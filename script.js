/*
Создать простой калькулятор с использованием HTML, CSS, JavaScript

Калькулятор должен уметь выполнять основные арифметические действия, такие как сложение, вычитание, умножение и деление.
- Калькулятор должен уметь работать с десятичными и отрицательными числами.
- Калькулятор должен иметь кнопку очистки экрана.
- Калькулятор должен иметь кнопку backspace, которая удаляет последнюю введённую цифру.
- Калькулятор должен иметь функцию памяти, позволяющую сохранять и вызывать число.
- Калькулятор должен быть оформлен с помощью CSS, чтобы сделать его визуально привлекательным.
- Калькулятор должен быть реализован с использованием чистого и читабельного JavaScript-кода.
- Калькулятор должен быть тщательно протестирован, чтобы убедиться, что он работает так, как ожидается.

Результат работы выложите в виде ссылки на git.
*/

let rownum = 0; // Это глобальная переменная. Она глобальная потому, что объявлена вне функций и как можно выше, чтоб всё, что находилось ниже её знало, что такая переменная есть.

// Функция ниже выполнится когда DOM будет полностью загружен.
// Иными словами, когда всё дерево элементов на сайте загрузится.
$(document).ready(function() {
    // alert('DOM fully loaded!');
    $('#history').val(sessionStorage.getItem('historyOfCalculations'));
});


// Это пользовательская функция.
// Она может иметь любое другое имя (латиницей).
// Пользовательских функций может быть сколько угодно
// и это лишь описание функции.
// Чтобы вызвать функцию и она отработала, нужно 
// прописать вызов функции отдельно.
function myfunction() {
  alert("кнопка нажата");
}

$('#equal').on('click', () =>{
  rownum += 1;


  let expression = $("#equation").val();
  console.log("У нас такое выражение: "+expression+"\nРезультат этого выражения равен: ");
  $('#history').val($('#history').val() + "\n" + rownum + ": " + expression);
  $("#equation").val(math.evaluate(expression));
  console.log($("#equation").val());

  // Всё это можно упростить до такого:
  // $('#history').val(rownum + ": " + $('#history').val() + "\n" + rownum + ": " + expression);
  // $("#equation").val(math.evaluate($("#equation").val()));
  // console.log("У нас такое выражение: "+expression+"\nРезультат этого выражения равен: "+$("#equation").val());

  sessionStorage.setItem('historyOfCalculations', $('#history').val());
});

$('#clear').on('click', () => {
  $('#equation').val('');
});

$('#backspace').on('click', () => {
  let len = $('#equation').val().length;
  console.log($('#equation').val(), len);
  $('#equation').val($('#equation').val().substr(0,len-1));
});