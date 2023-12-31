'use strict';

// Dark and Light Mode


const lightModeButton = document.querySelectorAll('span')[0];
const darkModeButton = document.querySelectorAll('span')[1];

const styleLink = document.querySelector('link[rel=stylesheet]');

lightModeButton.addEventListener('click', darkMode);
darkModeButton.addEventListener('click', lightMode);

function lightMode() {
    darkModeButton.style.display = 'none';

    styleLink.href = 'styles/styles-dark.css';

    lightModeButton.style.display = 'inline-block';
}

function darkMode() {
    lightModeButton.style.display = 'none';

    styleLink.href = 'styles/styles-light.css';

    darkModeButton.style.display = 'inline-block';
}