const header = document.querySelector('header');
const links = document.querySelectorAll('a[href^="#"]');
function scrollHeader() {
  if (this.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const section = document.querySelector(
      `${event.target.getAttribute('href')}`,
    );

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

window.addEventListener('scroll', scrollHeader);
