var container = document.querySelector('.container');
var inputColor = document.querySelector('#color');
var defaultColor = '#ffffff';
var hex = document.querySelector('#hex');
container.style.backgroundColor = `${defaultColor}`;

inputColor.addEventListener('change', () => {
    container.style.backgroundColor = inputColor.value;
    hex.innerHTML = `${inputColor.value}`
    return false;
}); 

