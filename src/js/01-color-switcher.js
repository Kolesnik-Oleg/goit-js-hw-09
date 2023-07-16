const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', handlerStart);
btnStop.addEventListener('click', handlerStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalColorChange;
btnStop.disadled = true;

function handlerStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    intervalColorChange = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
    } ,1000);
}

function handlerStop() {
    clearInterval(intervalColorChange);
    btnStart.disabled = false;
    btnStop.disabled = true;
}