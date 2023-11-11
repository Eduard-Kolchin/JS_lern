let buttonDawn = false;
let textInit;

//Обработчик поля input
document.querySelector(`input`).addEventListener(`input`, (event) => {
let duplicateField = document.querySelector(`#duplicateField`) 
duplicateField.textContent = event.target.value;
textInit = event.target.value;
if (buttonDawn === true) {
    event.target.value.textContent = null;
    }; 
});
//Обработчик кнопки
button = document.querySelector(`button`);
button.addEventListener(`mousedown`, (event) => {
    if (event.which === 1) {console.log(textInit);
        buttonDawn = true;
    };
});
button.addEventListener(`mouseup`, (event) => {
    if (event.which === 1) {
        buttonDawn = false;
    };
});