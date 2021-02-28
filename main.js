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

// A propriedade .offsetHeight é somente leitura e retorna um valor do tipo inteiro
// a altura de um elemento incluindo padding-top + padding-bottom + border-top + border-bottom.