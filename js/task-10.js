const inputNum = document.querySelector('#controls > input');
const divBox = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

inputNum.addEventListener('blur', getNumber);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let amount;

function getNumber(event) {
  amount = parseInt(event.currentTarget.value);
}

function createBoxes() {
  const arr = [];
  let x = 0;
  for (let i = 0; i < amount; i += 1){
    x +=30;
    const divEl = document.createElement('div');
    divEl.style.width = x + 'px';
    divEl.style.height = x + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    arr.push(divEl);
  }
 return divBox.append(...arr);
}

function destroyBoxes() {
  divBox.innerHTML ='';

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}