// Carrossel logic
const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const dots = document.querySelectorAll(".carousel-dot");

let currentIndex = 0;
const totalSlides = dots.length;

function updateCarousel() {
  if (!track) return;

  // Atualizar transform do track
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Atualizar dots
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("bg-modern-accent", "w-8");
      dot.classList.remove("bg-modern-border");
      dot.setAttribute("aria-selected", "true");
    } else {
      dot.classList.remove("bg-modern-accent", "w-8");
      dot.classList.add("bg-modern-border");
      dot.setAttribute("aria-selected", "false");
    }
  });
}

function goToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  updateCarousel();
}

// Event listeners
prevBtn?.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

nextBtn?.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

// Suporte a teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    goToSlide(currentIndex - 1);
  } else if (e.key === "ArrowRight") {
    goToSlide(currentIndex + 1);
  }
});

// Auto-play opcional (descomentarara ativar)
// setInterval(() => {
//   goToSlide(currentIndex + 1);
// }, 5000);
