function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  particlesContainer.innerHTML = ''; // Clear existing particles

  const isLight = document.body.classList.contains('light-theme');
  const numParticles = window.innerWidth > 768 ? 200 : 100;
  const numShooting = window.innerWidth > 768 ? 10 : 5;
  const numBirds = window.innerWidth > 768 ? 8 : 4;
  const numFireflies = window.innerWidth > 768 ? 50 : 25;

  if (isLight) {
    // Day mode: Clouds and birds
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 40 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size / 2}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 60}%`; // Higher in sky
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      particle.style.filter = 'blur(3px)'; // Softer clouds
      particlesContainer.appendChild(particle);
    }

    for (let i = 0; i < numBirds; i++) {
      const bird = document.createElement('i');
      bird.classList.add('fa-solid', 'fa-dove', 'bird');
      const direction = Math.random() < 0.5 ? 1 : -1;
      bird.style.setProperty('--start-left', direction === 1 ? '-10%' : '110%');
      bird.style.setProperty('--end-left', direction === 1 ? '110%' : '-10%');
      if (direction === -1) {
        bird.style.transform = 'scaleX(-1)';
      }
      bird.style.setProperty('--base-top', `${Math.random() * 50 + 5}%`);
      bird.style.setProperty('--amp', `${Math.random() * 10 + 5}`);
      const dur = Math.random() * 20 + 20;
      bird.style.animation = `fly-horizontal ${dur}s linear infinite, fly-vertical ${dur / 10}s ease-in-out infinite`;
      bird.style.animationDelay = `${Math.random() * 5}s`;
      bird.style.fontSize = `${Math.random() * 10 + 15}px`; // Vary size
      particlesContainer.appendChild(bird);
    }
  } else {
    // Night mode: Stars, shooting stars, fireflies
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
      particlesContainer.appendChild(particle);
    }

    for (let i = 0; i < numShooting; i++) {
      const shooting = document.createElement('div');
      shooting.classList.add('shooting-particle');
      shooting.style.left = `${Math.random() * 50}%`;
      shooting.style.top = `${Math.random() * 50}%`;
      shooting.style.animationDelay = `${Math.random() * 10 + 5}s`;
      shooting.style.animationDuration = `${Math.random() * 3 + 3}s`;
      particlesContainer.appendChild(shooting);
    }

    for (let i = 0; i < numFireflies; i++) {
      const firefly = document.createElement('div');
      firefly.classList.add('firefly');
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.animationDelay = `${Math.random() * 5}s`;
      firefly.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particlesContainer.appendChild(firefly);
    }
  }
}

// Initial creation
createParticles();

// Theme toggle listener to recreate particles
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const toggleIcon = document.querySelector('.theme-toggle i');
  toggleIcon.classList.toggle('fa-moon');
  toggleIcon.classList.toggle('fa-sun');
  createParticles(); // Recreate based on new theme
});

// Javascript code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://o25hc5nrjoxfc7anqbnfq3gyui0jptxw.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Total views to the webpage: ${data}`;
}

updateCounter();

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-slide, .hero, .quick-nav, section, footer');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Specific for experience: add visible to timeline-items
        if (entry.target.id === 'experience') {
          const timelineItems = entry.target.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 200);
          });
        }
        // Specific for skills: add visible to skill-cat
        if (entry.target.id === 'skills') {
          const skillCats = entry.target.querySelectorAll('.skill-cat');
          skillCats.forEach((cat, index) => {
            setTimeout(() => {
              cat.classList.add('visible');
            }, index * 200);
          });
        }
        // Specific for projects: add visible to project-card
        if (entry.target.id === 'projects') {
          const projectCards = entry.target.querySelectorAll('.project-card');
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 200);
          });
        }
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% visible
  });

  elements.forEach(el => observer.observe(el));
});

// Parallax for moon
window.addEventListener('scroll', () => {
  const moon = document.querySelector('.moon');
  moon.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

// Back to top
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  backToTop.classList.toggle('visible', window.scrollY > 300);
});

document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('hidden');
});

// New: Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});