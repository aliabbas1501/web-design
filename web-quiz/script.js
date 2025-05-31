// Get references to the button and heading
const changeTextBtn = document.getElementById('changeTextBtn');
const myHeading = document.getElementById('myHeading');

// Set up the click event listener
changeTextBtn.addEventListener('click', () => {
  myHeading.textContent = 'The heading text has been changed!';
});
