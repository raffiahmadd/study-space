// 1. ANIMASI LOADING AWAL
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 1000); 
});

// 2. EFEK WARNA NAVBAR SAAT DI-SCROLL & TOMBOL BACK TO TOP
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// 3. MENU MOBILE (HAMBURGER KETIKA DI LAYAR HP)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 4. ANIMASI MUNCUL SAAT DI-SCROLL (SCROLL REVEAL)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); 

// 5. LIGHTBOX GALLERY (Pop-up Poster A3)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');
const mainPoster = document.getElementById('poster-klik'); 
const btnZoom = document.getElementById('btn-zoom'); 

function openLightbox() {
    if(mainPoster) {
        lightboxImg.src = mainPoster.src;
        lightbox.style.display = 'flex';
    }
}

if(mainPoster) { mainPoster.addEventListener('click', openLightbox); }
if(btnZoom) { btnZoom.addEventListener('click', openLightbox); }

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

if(lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
}