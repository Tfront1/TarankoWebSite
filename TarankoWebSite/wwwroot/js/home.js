document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".appearance-annimation");

animatedElements.forEach(function(element, index) {
    element.style.transitionDelay = `${index * 0.5}s`; // Затримка залежно від індексу
element.classList.add("appearance");
    });
});
