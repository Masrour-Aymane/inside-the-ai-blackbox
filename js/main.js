// ── Sticky header shadow on scroll ──
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── Reading progress bar (article pages only) ──
const progressBar = document.querySelector('.reading-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + '%';
  }, { passive: true });
}
