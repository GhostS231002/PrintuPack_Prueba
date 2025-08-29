
// Menu toggle
const btn = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
if (btn && menu){
  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}
// Year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// WhatsApp floating toggle (optional)
(function(){
  const enable = (document.body.getAttribute('data-enable-whatsapp')||'false') === 'true';
  const wa = document.getElementById('wa-float');
  if (wa) wa.style.display = enable ? 'inline-block' : 'none';
})();

// Demo submit
const form = document.querySelector('.contact-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Gracias. Configura el envío en assets/js/main.js');
  });
}
