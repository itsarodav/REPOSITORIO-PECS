import "./styles.scss";

const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const ddCategoria = document.querySelector(".submenu > a");
const dropdown = document.querySelector(".submenu .dropdown");
const categoriaLink = document.getElementById("dd-selection");

menuToggle.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
});

ddCategoria.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace redirija
    dropdown.classList.toggle("active");
});

function isMobile() {
    return window.innerWidth < 768; // o tu breakpoint
}

    categoriaLink.addEventListener("click", function (e) {
    if (isMobile()) {
        if (!dropdown.classList.contains("active")) {
        // Primer click: abre el submenu
        e.preventDefault();
        dropdown.classList.add("active");
        } 
      // Segundo click: no se hace preventDefault, va al enlace normalmente
    }
});
