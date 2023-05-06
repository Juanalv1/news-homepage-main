const burguerMenu = document.querySelector('#burguer-menu')
const xMenu = document.querySelector('#close-menu')
const navbar = document.querySelector('nav')
const main = document.querySelector('main')
const mobileMenu = document.querySelector('#mobile-menu')


burguerMenu.addEventListener('click', toggleMobileMenu)
xMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden')
  navbar.classList.toggle('brightness-50')
  main.classList.toggle('brightness-50')
}
