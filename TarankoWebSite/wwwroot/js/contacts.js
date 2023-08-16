window.addEventListener("load", function () {
    var copyLink = document.getElementById('copyLink');
    document.body.style.overflow = "visible";
    const hoverElements = document.querySelectorAll("#contacts--hover-div");
    hoverElements.forEach(function (elm) {

        elm.addEventListener("mouseover", function () {
            elm.classList.add("contacts--hover-annimation");
            changeText(elm);
        });
        elm.addEventListener("mouseout", function () {
            elm.classList.add("contacts--hover-annimation");
            resetText(elm);
        });
    });
    copyLink.addEventListener('click', function (event) {
        event.preventDefault(); // Перешкоджає переходу за посиланням

        const textToCopy = 'tarankotaras.net@gmail.com';
        navigator.clipboard.writeText(textToCopy)
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
        link.innerText = "tarankotaras.net@gmail.com";
    }
    link.style.pointerEvents = 'auto';
}