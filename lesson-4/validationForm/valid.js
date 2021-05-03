"use strict";

let button = document.querySelector('button');
let input = document.querySelectorAll('input');
let span = document.querySelector('span');

button.addEventListener('click', () => {
    if (!/[a-zA-Zа-яА-ЯёЁ]/.test(input[0].value)) {
        span.style.display = 'block';
        input[0].style.border = '1px solid red';
    } else {
        span.style.display = 'none';
        input[0].style.border = '1px solid black';
    }
    if (!/\d/.test(input[1].value)) {
        span.style.display = 'block';
        input[1].style.border = '1px solid red';
    } else {
        span.style.display = 'none';
        input[1].style.border = '1px solid black';
    }
    if (!/\@/.test(input[2].value)) {
        span.style.display = 'block';
        input[2].style.border = '1px solid red';
    } else {
        span.style.display = 'none';
        input[2].style.border = '1px solid black';
    }
});