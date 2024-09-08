const onPageLoad = function () {
    let red = document.getElementsByClassName("rojo")[0];
    red.addEventListener("click", setBodyColor);

    let green = document.getElementsByClassName("verde")[0];
    green.addEventListener("click", setBodyColor);

    let blue = document.getElementsByClassName("azul")[0];
    blue.addEventListener("click", setBodyColor);
}
window.onload = onPageLoad;

const setBodyColor = function(ev) {
    const elDiv = ev.target;
    const colorDelDiv = window.getComputedStyle(elDiv).backgroundColor;
    document.body.style.background = colorDelDiv;
}
