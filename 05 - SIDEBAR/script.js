const fechar = document.querySelector('.fechar');
const menu = document.querySelector('.menu');
const sideBar = document.querySelector('.side-bar');
const titulo = document.querySelector('.titulo');
function activeSideBar() {
  sideBar.classList.toggle('active');
  menu.classList.toggle('active');

  titulo.classList.toggle('active');
}

fechar.addEventListener('click', activeSideBar);
menu.addEventListener('click', activeSideBar);
