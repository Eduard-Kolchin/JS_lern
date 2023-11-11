let inputField = document.querySelector(`input`);
let button = document.querySelector(`button`);
let duplicateField = document.querySelector(`#duplicateField`);
let textInit;
duplicateField.textContent = null;

//Обработчик поля input
inputField.addEventListener(`input`, (event) => {
duplicateField.textContent = textInit = event.target.value;
});

//Обработчик кнопки
button.addEventListener(`mousedown`, (event) => {
    console.log(textInit);
});
button.addEventListener(`mouseup`, (event) => {
    duplicateField.textContent = inputField.value = null;
});