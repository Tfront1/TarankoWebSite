window.addEventListener("load", function () {
    document.body.style.overflow = "visible";
    const hoverElements = document.querySelectorAll("#resume--hover-div");
    hoverElements.forEach(function (elm) {

        elm.addEventListener("mouseover", function () {
            elm.classList.add("resume--hover-annimation");
        });
        elm.addEventListener("mouseout", function () {
            elm.classList.add("resume--hover-annimation");
        });
    });
});