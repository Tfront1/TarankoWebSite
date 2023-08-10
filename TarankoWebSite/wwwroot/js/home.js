window.addEventListener("load", function () {
    const animatedElements = document.querySelectorAll(".appearance-annimation");
    const hoverElements = document.querySelectorAll(".hover-div");

    animatedElements.forEach(function (element, index) {
        element.style.transitionDelay = `${index * 0.5}s`; // Затримка залежно від індексу
        element.classList.add("appearance");

        // Очікування завершення анімації для оновлення затримки
        element.addEventListener("transitionend", function () {
            if (index === animatedElements.length - 1) {
                animatedElements.forEach(function (el) {
                    el.style.transitionDelay = "0s"; // Зменшення затримки після анімації\
                    
                    
                });
            }
        });
    });
    hoverElements.forEach(function (element) {
        element.classList.add("hover-annimation");
        element.addEventListener("mouseover", function () {
            changeText(element);
        });
        element.addEventListener("mouseout", function () {
            resetText(element);
        });
    });
});
function changeText(el) {
    var link = el.querySelector("a");
    if (link.innerText === "Hello world.") {
        link.innerText = "About Me";
    }
    else if (link.innerText === "I am") {
        link.innerText = "Resume";
    }
    else if (link.innerText === "Taras Taranko") {
        link.innerText = "Projects";
    }
    else {
        link.innerText = "Contacts";   
    }  
}
function resetText(el) {
    var link = el.querySelector("a");
    if (link.innerText === "About Me") {
        link.innerText = "Hello world.";
    }
    else if (link.innerText === "Resume") {
        link.innerText = "I am";
    }
    else if (link.innerText === "Projects") {
        link.innerText = "Taras Taranko";
    }
    else {
        link.innerText = ".NET developer";
    }
}