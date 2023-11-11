let link = document.querySelector('a');

link.addEventListener(`click`, (event) => {
    event.preventDefault();
    let newLink = prompt('Введите новый текст ссылки');
    event.currentTarget.textContent = newLink;
  });
