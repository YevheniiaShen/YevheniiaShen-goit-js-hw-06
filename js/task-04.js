
const counter = document.getElementById('counter');
const decrementButton = counter.querySelector('button[data-action="decrement"]');
const incrementButton = counter.querySelector('button[data-action="increment"]');
const valueSpan = counter.querySelector('#value');


let counterValue = 0;


decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});


incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});