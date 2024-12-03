let img = document.querySelector('#image');
let container = document.querySelector('.container');

function phones (phone){
    img.src = phone;
}

function colors (color){
    container.style.background = color;
}