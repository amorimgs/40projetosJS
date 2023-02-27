const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.modal');

function initModal() {
  modal.classList.toggle('active');
}

buttons.forEach((item) => {
  item.addEventListener('click', initModal);
});
