const menuBtn = document.querySelector('.menu-btn');
const headerItems = document.getElementById ('header__items');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerItems.classList.toggle('show')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    headerItems.classList.remove('show')
  }
});