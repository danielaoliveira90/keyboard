// Create a web page that displays the key code and key value of the last key pressed on the keyboard.

function showKeyCodes(e) {
    const keyCodeDisplay = document.getElementById('keyCode');
    const keyValueDisplay = document.getElementById('keyValue');

    const keyCode = e.keyCode;
    const keyValue = e.key === ' ' ? 'Space' : e.key;

    keyCodeDisplay.textContent = keyCode;
    keyValueDisplay.textContent = keyValue;
}

window.addEventListener('keydown', showKeyCodes);
