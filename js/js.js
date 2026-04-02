const hamburguer = document.querySelector('.navbar__hambur');
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburguer.contains(e.target)) {
    menu.classList.remove('active');
  }
});

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_gjni9er';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    },
  );
});
