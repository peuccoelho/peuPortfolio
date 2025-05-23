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
