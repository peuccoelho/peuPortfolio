// scripts.js
const phrases = [
  "Dev Full-Stack",
  "Passionate about coding",
  "Busque a perfeição"
];

let currentPhrase = 0;
let currentChar = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (currentChar < phrases[currentPhrase].length) {
    typedText.textContent += phrases[currentPhrase].charAt(currentChar);
    currentChar++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentChar > 0) {
    typedText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(erase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);

  AOS.init({ duration: 1000 });

  ScrollReveal().reveal("#hero h1, #hero p, #hero a", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
    interval: 200,
    reset: true
  });

  gsap.from(".card-project", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
});

function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.querySelector('input[placeholder="Seu nome"]').value;
  const email = document.querySelector('input[placeholder="Seu email"]').value;
  const mensagem = document.querySelector('textarea[placeholder="Sua mensagem"]').value;

  const textoWhatsApp = `Olá Pedro! Meu nome é ${nome}, meu e-mail é ${email} e gostaria de dizer: ${mensagem}`;

  const link = `https://wa.me/5571993381929?text=${encodeURIComponent(textoWhatsApp)}`;

  window.open(link, '_blank');
  document.getElementById("mensagem-enviada").classList.remove("hidden");
  document.getElementById("mensagem-enviada").scrollIntoView({ behavior: 'smooth' });
}

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const totalCards = carousel.children.length;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * carousel.clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Botões
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

// Swipe para mobile
let startX = 0;
let isSwiping = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  const deltaX = e.touches[0].clientX - startX;

  if (Math.abs(deltaX) > 50) {
    isSwiping = false;
    if (deltaX > 0) {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    } else {
      currentIndex = (currentIndex + 1) % totalCards;
    }
    updateCarousel();
  }
});

carousel.addEventListener("touchend", () => {
  isSwiping = false;
});

// Resize handler (importante para responsividade)
window.addEventListener("resize", updateCarousel);

// Inicializa
updateCarousel();
