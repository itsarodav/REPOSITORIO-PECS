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

//Youtube

document.querySelectorAll('.youtube-placeholder').forEach(el => {
  el.addEventListener('click', () => {
    const videoId = el.dataset.videoId;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.title = 'Video de YouTube';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';

    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';

    el.innerHTML = '';
    el.appendChild(iframe);
  });
});

