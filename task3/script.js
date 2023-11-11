const trafficLight = document.querySelector('#trafficLight');
const LightE1 = document.querySelector('#Light1');
const LightE2 = document.querySelector('#Light2');
const LightE3 = document.querySelector('#Light3');

function makeYellow() {
    LightE1.style.background = ('black');
    LightE2.style.background = ('yellow');
    LightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
};
trafficLight.addEventListener('click', makeYellow);

function makeRed() {
    LightE1.style.background = ('black');
    LightE2.style.background = ('black');
    LightE3.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
};
trafficLight.addEventListener('click', makeRed);

function makeGreen() {
    LightE1.style.background = ('green');
    LightE2.style.background = ('black');
    LightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
};
trafficLight.addEventListener('click', makeGreen);
