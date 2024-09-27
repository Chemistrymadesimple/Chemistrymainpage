// Selecting the button and paragraph
const changeTextBtn = document.getElementById('changeTextBtn');
const greetingParagraph = document.getElementById('greeting');

// Adding a click event listener to the button
changeTextBtn.addEventListener('click', () => {
    greetingParagraph.textContent = 'You have clicked the button!';
});
