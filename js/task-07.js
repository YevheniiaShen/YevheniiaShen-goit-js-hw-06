const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', changeFsOfSpan);

function changeFsOfSpan(event) {
    spanText.style.fontSize = input.value + 'px';
    console.log(spanText.style.fontSize);
}