const nav = document.querySelector('.nav')

window.addEventListener('scroll', navChange)

function navChange() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

// window.scrollY - Retorna o número de pixels que o documento já rolou verticalmente.
// Mais: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scrollY

// A propriedade .offsetHeight é somente leitura e retorna um valor do tipo inteiro
// a altura de um elemento incluindo padding-top + padding-bottom + border-top + border-bottom.
// Mais: https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/offsetHeight


// function toggleNav(el) {
//   navButtons.classList.toggle('appear')

//   if (navButtons.classList.contains('appear')) {
//     el.className = 'nav-toggle fas fa-times'
//   } else {
//     el.className = 'nav-toggle fas fa-bars'
//   }
// }

const navToggle = document.getElementById('toggle-nav')
const navButtons = document.getElementById('nav-buttons')

navToggle.addEventListener('click', () => {
  navButtons.classList.toggle('show')
})