// Typing effect pada hero
const typingText = [
  "Selamat Datang di Web Pribadi Saya!",
  "Kenali saya lebih dekat dan lihat hasil karya project yang telah saya buat."
];
let textIndex = 0, charIndex = 0;
const heroH2 = document.querySelector('.hero h2');
function typeEffect() {
  if (textIndex < typingText.length) {
    if (charIndex < typingText[textIndex].length) {
      heroH2.innerHTML += typingText[textIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 60);
    } else {
      charIndex = 0;
      textIndex++;
      if (textIndex < typingText.length) {
        heroH2.innerHTML += "<br>";
        setTimeout(typeEffect, 400);
      }
    }
  }
}
if (heroH2) {
  heroH2.innerHTML = "";
  typeEffect();
}

// Smooth scroll untuk navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    }
  });
});

// Efek hover pada project-card
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.boxShadow = '0 8px 20px rgba(110, 64, 170, 0.3)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Toggle dark/light mode
const footer = document.querySelector('nav');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙/☀️';
toggleBtn.style.marginLeft = '10px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.title = 'Ganti mode gelap/terang';
footer && footer.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});