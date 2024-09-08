// const onPageLoad = function () {
//     let uno = document.getElementsByClassName("roja")[0];
//     uno.addEventListener("click", setBodyColor);

//     let dos = document.getElementsByClassName("azul")[0];
//     dos.addEventListener("click", setBodyColor);

//     let tres = document.getElementsByClassName("verde")[0];
//     tres.addEventListener("click", setBodyColor);
// }
// window.onload = onPageLoad;

// const setBodyColor = function(ev) {
//     const elDiv = ev.target;
//     const colorDelDiv = window.getComputedStyle(elDiv).backgroundColor;
//     document.body.style.background = colorDelDiv;
// }

let body = document.querySelector('body');
document.querySelector('.roja').addEventListener('click', function () {
    body.style.backgroundColor = ('red')
});

document.querySelector('.azul').addEventListener('click', function () {
    body.style.backgroundColor = ('blue')
});

document.querySelector('.verde').addEventListener('click', function () {
    body.style.backgroundColor = ('green')
});