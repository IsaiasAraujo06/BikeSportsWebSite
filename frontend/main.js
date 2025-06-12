// Seleciona os elementos do botão e do menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu ul');

// Alterna a visibilidade do menu quando clicado
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
