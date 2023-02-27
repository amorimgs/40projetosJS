function initAcordion() {
  const acordion = document.querySelectorAll('dt');
  acordion[0].classList.add('active');
  acordion[0].nextElementSibling.classList.add('active');

  function AcordionList() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  acordion.forEach((item) => {
    item.addEventListener('click', AcordionList);
  });
}
initAcordion();
