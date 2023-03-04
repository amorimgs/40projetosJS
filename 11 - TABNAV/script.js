const buttons = document.querySelectorAll('button');
const p = document.querySelectorAll('p');

function activeTabNav(i) {
  console.log(i);
  p.forEach((i, index) => {
    i.classList.remove('active');
    buttons[index].classList.remove('active');
  });
  p[i].classList.add('active');
  buttons[i].classList.add('active');
}
activeTabNav(0);
buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log('item');
    activeTabNav(index);
  });
});
