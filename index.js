// STORE
const userMenu = document.querySelector('#user__menu')
const userMenuBtn = document.querySelector('#user__menu__btn')

// Logic

userMenuBtn.onclick = toggleMenu

function toggleMenu(e) {
  userMenu.classList.toggle('hidden')
}
