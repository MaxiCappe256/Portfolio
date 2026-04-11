const hamburguer = document.querySelector('.navbar__hambur');
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');

if (hamburguer && menu) {
  hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    if (menu) menu.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!menu || !hamburguer) return;
  if (!menu.contains(e.target) && !hamburguer.contains(e.target)) {
    menu.classList.remove('active');
  }
});

let scrollRevealInitialized = false;

function initScrollReveal() {
  if (scrollRevealInitialized) return;
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  scrollRevealInitialized = true;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.querySelectorAll('.tecnologias__grid .reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${Math.min(i * 38, 450)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -7% 0px',
      threshold: 0.05,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

function initEmailForm() {
  const form = document.getElementById('form');
  const btn = document.getElementById('button');
  if (!form || !btn || typeof emailjs === 'undefined') return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const prev = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const serviceID = 'default_service';
    const templateID = 'template_gjni9er';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = prev;
        btn.disabled = false;
        alert('¡Enviado!');
      },
      (err) => {
        btn.textContent = prev;
        btn.disabled = false;
        alert(JSON.stringify(err));
      }
    );
  });
}

window.addEventListener('load', initEmailForm);
