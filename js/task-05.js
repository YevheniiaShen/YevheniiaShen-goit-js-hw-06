const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  nameInput.addEventListener("input", function(event) {
    const name = event.target.value;
    nameOutput.textContent = name || "Anonymous";
  });