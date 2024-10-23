let button = document.querySelector("#bars")
let menu = document.querySelector(".menu")

button.addEventListener("click", function () {
    menu.classList.toggle("show")
})

// dark mode 

let darkmode = document.querySelector(".mood .ri-moon-fill");

darkmode.addEventListener("click", function () {
    if (document.body.getAttribute('class') == 'light') {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        darkmode.setAttribute('class', 'ri-moon-fill');
    }
    else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        darkmode.setAttribute('class', 'ri-sun-fill');

    }
})
// 