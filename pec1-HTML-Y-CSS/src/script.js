import "./styles.scss";

const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const ddCategoria = document.querySelector(".submenu > a");
const dropdown = document.querySelector(".submenu .dropdown");

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
