// Testimonials.js — supports both hardcoded and Firebase-loaded slides

let currentSlide = 0;

function getSlides() {
  return document.querySelectorAll('.testimonial-slide');
}

function updateSlide() {
  const slides = getSlides();
  if (!slides.length) return;
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'entering');
    if (index === currentSlide) {
      slide.classList.add('active');
      setTimeout(() => slide.classList.add('entering'), 10);
    }
  });
  const prevBtn = document.querySelector('.nav-arrow.prev');
  const nextBtn = document.querySelector('.nav-arrow.next');
  if (prevBtn) prevBtn.classList.toggle('disabled', currentSlide === 0);
  if (nextBtn) nextBtn.classList.toggle('disabled', currentSlide === slides.length - 1);
}

function nextTestimonial() {
  const slides = getSlides();
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
}

function previousTestimonial() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

// Called by Firebase sync after injecting new slides
window.reinitTestimonials = function() {
  currentSlide = 0;
  stopAutoSlide();
  updateSlide();
  startAutoSlide();
};

// Initialize
updateSlide();

// Auto-slide
let autoSlideInterval;
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const slides = getSlides();
    if (currentSlide < slides.length - 1) {
      nextTestimonial();
    } else {
      currentSlide = 0;
      updateSlide();
    }
  }, 5000);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

const container = document.querySelector('.testimonials-container');
if (container) {
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);
}
startAutoSlide();

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') previousTestimonial();
  else if (e.key === 'ArrowRight') nextTestimonial();
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;
if (container) {
  container.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextTestimonial();
      else previousTestimonial();
    }
  });
}



