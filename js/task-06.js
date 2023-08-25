const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', getInputName);

function getInputName(event) {
    if (event.currentTarget.value !== '') {
       return spanName.textContent = event.currentTarget.value
    } 
    spanName.textContent = 'Anonymous'   
}