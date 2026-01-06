const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2
  }
);

document
  .querySelectorAll('.fade-up, .fade-left, .fade-right')
  .forEach(el => observer.observe(el));

  const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const slideWidth = slides[0].offsetWidth + 20;

function updateCarousel() {
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < slides.length - 3) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

/* Автопрокрутка */
setInterval(() => {
  if (index < slides.length - 3) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}, 4000);
