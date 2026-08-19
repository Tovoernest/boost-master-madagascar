// Boost Master Madagascar — script partagé (menu mobile, FAQ, formulaire, nav active)

// ---- Active nav highlighting (based on <body data-page="..">) ----
document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.tagName === 'A' && link.dataset.page === current) {
      link.classList.add('active');
    }
  });
});

// ---- Mobile menu ----
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobileMenu(){
  if(!mobileMenu) return;
  mobileMenu.classList.remove('open');
  menuToggle && menuToggle.setAttribute('aria-expanded','false');
}
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close menu after tapping any link inside it
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
}

// ---- FAQ accordions ----
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// ---- Contact form (no backend: guide to WhatsApp) ----
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    if (msg) msg.classList.add('show');
    form.reset();
  });
}
