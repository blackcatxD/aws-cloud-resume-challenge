function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  const numStars = 200;
  const numShooting = 5;

  for (let i = 0; i < numStars; i++) {
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
}
createParticles();

// Javascript code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://o25hc5nrjoxfc7anqbnfq3gyui0jptxw.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();