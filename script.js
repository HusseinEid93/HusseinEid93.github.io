const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.header__toggle');
const overlay = document.getElementById('overlay');


toggleBtn.addEventListener('click', () => {
   header.classList.toggle('active');
   document.documentElement.classList.toggle('active');
   overlay.classList.toggle('active');
});


overlay.addEventListener('click', () => toggleBtn.click())