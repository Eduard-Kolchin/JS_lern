//consoleLog
const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener(`click`, () => {
    alert('console.log() — Этот метод консоли используется для вывода сообщений в браузерную консоль');
  });

//alert
const alert_ = document.querySelector('#alert');

alert_.addEventListener(`click`, () => {
    alert('alert() — простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
  });

//prompt
const prompt_ = document.querySelector('#prompt');

prompt_.addEventListener(`click`, () => {
    alert('prompt() — «собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста.');
  });