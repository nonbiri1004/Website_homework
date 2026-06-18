// ===== HERO SLIDER =====
const slides  = document.querySelectorAll('.hero-slide');
const dots    = document.querySelectorAll('.hero-dot');
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');
let current = 0;
let timer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAuto() {
  timer = setInterval(() => goTo(current + 1), 5000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

if (slides.length) {
  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));
  startAuto();
}

// ===== HAMBURGER / SP NAV =====
const hamburger = document.getElementById('hamburger');
const spNav     = document.getElementById('sp-nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  spNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  spNav.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.js-sp-close').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    spNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    spNav.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  });
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== SCROLL IN-VIEW ANIMATION =====
const inviewEls = document.querySelectorAll('.inview');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

inviewEls.forEach(el => observer.observe(el));
