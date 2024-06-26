document.getElementById('inputBox').addEventListener('input', updateText);
document.getElementById('fontColor').addEventListener('input', updateText);
document.getElementById('fontSize').addEventListener('input', updateText);

function updateText(){
    const inputBox = document.getElementById('inputBox').value;
    const fontColor = document.getElementById('fontColor').value;
    const fontSize = document.getElementById('fontSize').value;
    const output = document.getElementById('output');

    output.style.fontSize = fontSize + 'px';
    output.style.color = fontColor;
    output.textContent = inputBox;
}

function setFontStyle(fontFamily, element) {
    const output = document.getElementById('output');
    output.style.fontFamily = fontFamily;

    const fontOptions = document.querySelectorAll('.fontOption');
    fontOptions.forEach(option => option.classList.remove('selected'));

    element.classList.add('selected');
}