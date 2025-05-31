// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const changeTextBtn = document.getElementById('changeTextBtn');
  const myHeading = document.getElementById('myHeading');

  const originalText = 'Hello, this is my original heading!';
  const newText = 'The heading text has been changed!';

  // Toggle the heading text on each click
  changeTextBtn.addEventListener('click', () => {
    myHeading.textContent =
      myHeading.textContent === originalText ? newText : originalText;
  });
});
