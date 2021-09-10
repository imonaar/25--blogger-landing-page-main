const menuItems = Array.from(document.querySelectorAll('li.js-has-submenu'));

const hamburger = document.querySelector('.js-hamburger')
const navMobile = document.querySelector('.js-nav-mobile')

hamburger.addEventListener('click', ()=>{
  navMobile.classList.toggle('open')
  hamburger.classList.toggle('close')
})

