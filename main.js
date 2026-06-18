// ===== HERO SLIDER (Progress Bar) =====
const slides      = document.querySelectorAll('.hero-slide');
const progressBar = document.querySelector('.hero-progress__bar');
const prevBtn     = document.querySelector('.hero-prev');
const nextBtn     = document.querySelector('.hero-next');
const DURATION    = 5000;
let current = 0;
let timer;

function setProgress() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
  void progressBar.offsetWidth; // force reflow
  progressBar.style.transition = `width ${DURATION}ms linear`;
  progressBar.style.width = '100%';
}

function goTo(n) {
  slides[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  setProgress();
}

function startAuto() {
  setProgress();
  timer = setInterval(() => goTo(current + 1), DURATION);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

if (slides.length) {
  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
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
}, { passive: true });

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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.inview').forEach(el => observer.observe(el));

// ===== STATS COUNTER =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) counterObserver.observe(statsGrid);

// ===== NAV SCROLL SPY =====
const sections  = document.querySelectorAll('main section[id]');
const navLinks  = document.querySelectorAll('.header-nav a[href^="#"]');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.35, rootMargin: '-64px 0px -40% 0px' });

sections.forEach(s => spyObserver.observe(s));

// ===== BACK TO TOP =====
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
