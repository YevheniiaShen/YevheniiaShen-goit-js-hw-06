const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;

btnChangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6,0)}`;
};

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
};