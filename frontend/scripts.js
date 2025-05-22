// Animação de digitação para o texto
const phrases = [
  "Desenvolvedor Front-end", 
  "Criativo Digital", 
  "Apaixonado por design e código"
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
});
AOS.init({ duration: 1000 });

      ScrollReveal().reveal("#hero h1, #hero p, #hero a", {
        delay: 200,
        distance: "50px",
        origin: "bottom",
        interval: 200,
        reset: true,
      });

      gsap.from(".card-project", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      });