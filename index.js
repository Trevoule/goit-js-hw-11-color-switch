const colors = [
  '#FFFFFF', //white
  '#2196F3', //blue
  '#4CAF50', //green
  '#FF9800', //orange
  '#009688', //lazur
  '#795548', //brown
];

const startBtn = document.querySelector('button[data-action="start"]')
const stopBtn = document.querySelector('button[data-action="stop"]')


startBtn.addEventListener('click', changeWindowColor)
stopBtn.addEventListener('click', stopChange)

let timerId = null;

function changeWindowColor() {
    startBtn.disabled = true;

    timerId = setInterval(() => {
document.body.style.backgroundColor = randomColor(0, colors.length);
    }, 1000);
        console.log('Изменение начато');
};

const randomColor = function (max, min) {
    return colors[randomIntegerFromInterval(min, max)]
}

function stopChange() {
    startBtn.disabled = false;
    clearInterval(timerId)
    console.log('Изменение остановлено');
    document.body.style.backgroundColor = randomColor(0, colors.length)
}


function randomIntegerFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};
