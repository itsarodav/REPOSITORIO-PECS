import "./styles/styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const ddCategoria = document.querySelector(".submenu > a");
const dropdown = document.querySelector(".submenu .dropdown");

let submenuAbierto = false;

// Función para detectar mobile
function isMobile() {
  return window.innerWidth < 1024; // del breakpoint
}

// Abrir/cerrar menú hamburguesa
menuToggle.addEventListener('click', () => {
    navbar.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
    });

    // Submenú mobile - toggle + navegación
    ddCategoria.addEventListener("click", (e) => {
    if (isMobile()) {
        if (!submenuAbierto) {
        e.preventDefault(); // Evita navegación en el primer click
        dropdown.classList.add("active");
        submenuAbierto = true;
        } else {
        // Segundo click: deja que el enlace funcione normalmente
        submenuAbierto = false;
        }
    }
});

