const hamburger = document.getElementById('nav-toggle'); //hamburger toggle
const sideNav = document.querySelector('.sidenav'); //side navbar
const notSideNav = document.querySelector('.not-sidenav'); //side navbar
const modal = document.querySelector('.modal-container'); //modal
const closeBtn = document.querySelector('.close-btn');

//Hamburger toggle and show sideNav
hamburger.addEventListener('click', () => {
  modal.classList.toggle('active');
  sideNav.style.transform = 'translateX(0)';
  closeBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
  sideNav.style.transform = 'translateX(-100%)';
  closeBtn.classList.toggle('active');
});
