// Typewriter Effect
const text = "Hey Joe...";
let i = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Reveal Message
document.getElementById("revealBtn").addEventListener("click", function() {
  const card = document.getElementById("messageCard");
  card.classList.remove("hidden");
  this.style.display = "none";
});

// Mute / Unmute
const bgMusic = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.textContent = "Mute";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "Unmute";
  }
});

// Stars animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      alpha: Math.random()
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
}
createStars(150);
setInterval(drawStars, 50);
