'use strict';
const WHATSAPP_NUMBER = "212XXXXXXXXX";
const WHATSAPP_MESSAGE = "السلام عليكم، بغيت نستفسر على خدمة صيانة الكوزينة.";
const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const contactNotice = document.getElementById('contact-notice');
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsappURL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.addEventListener('click', event => {
    if (!/^212\d{9}$/.test(WHATSAPP_NUMBER)) {
      event.preventDefault();
      contactNotice.showModal();
    }
  });
});
contactNotice.querySelectorAll('button').forEach(button => button.addEventListener('click', () => contactNotice.close()));
contactNotice.addEventListener('click', event => { if (event.target === contactNotice) { const box = contactNotice.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) contactNotice.close(); } });
document.querySelectorAll('.comparison input').forEach(input => {
  const update = () => { input.parentElement.style.setProperty('--position', `${input.value}%`); input.setAttribute('aria-valuetext', `${input.value}%`); };
  input.addEventListener('input', update);
  update();
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
