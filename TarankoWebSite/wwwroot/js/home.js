document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".appearance-annimation");

    animatedElements.forEach(function (element, index) {
        element.style.transitionDelay = `${index * 0.5}s`; // Затримка залежно від індексу
        element.classList.add("appearance");

        // Очікування завершення анімації для оновлення затримки
        element.addEventListener("transitionend", function () {
            if (index === animatedElements.length - 1) {
                animatedElements.forEach(function (el) {
                    el.style.transitionDelay = "0s"; // Зменшення затримки після анімації\
                    el.classList.add("hover-annimation");
                });
            }
        });
    });
});