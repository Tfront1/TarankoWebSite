window.addEventListener("load", function () {
    document.body.style.overflow = "visible";
    const hoverElements = document.querySelectorAll("#hover-div");
    hoverElements.forEach(function (elm) {

        elm.addEventListener("mouseover", function () {
            elm.classList.add("hover-annimation");
            changeText(elm);
        });
        elm.addEventListener("mouseout", function () {
            elm.classList.add("hover-annimation");
            resetText(elm);
        });
    });
});
function changeText(el) {
    var link = el.querySelector("a");
    if (link.innerText === "tarankotaras.net@gmail.com") {
        link.innerText = "Copy to clipboard";
    }
    link.style.pointerEvents = 'auto';
}
function resetText(el) {
    var link = el.querySelector("a");
    if (link.innerText === "Copy to clipboard") {
        link.innerText = "tarankotaras.net@gmail.com"";
    }
    link.style.pointerEvents = 'auto';
}