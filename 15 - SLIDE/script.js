function animaSlide() {
  const srcImg = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg',
    'imagem4.jpg',
    'imagem5.jpg',
    'imagem6.jpg',
  ];

  const filho = document.querySelector('.filho');
  const img = document.querySelector('.img');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let p = 1;
  let n = 0;

  function trocaImg(srcImg) {
    if (p < 2) {
      n++;
      if (n === srcImg.length) {
        n = 0;
      }
    }
    img.src = `img/${srcImg[n]}`;
    img.classList.add('ativoRight');
    setTimeout(() => {
      img.classList.remove('ativoRight');
    }, 300);
  }
  setInterval(() => {
    filho.style.width = `${p / 5}%`;

    p++;

    if (p > 500) {
      p = 1;
      trocaImg(srcImg);
    }
  }, 10);

  function nextImg() {
    n++;
    p = 1;
    if (n === srcImg.length) {
      n = 0;
    }
    img.classList.add('ativoRight');
    setTimeout(() => {
      img.classList.remove('ativoRight');
    }, 300);
    img.src = `img/${srcImg[n]}`;
  }
  next.addEventListener('click', nextImg);

  function prevImg() {
    p = 3;
    if (n === 0) {
      n = srcImg.length - 1;
    } else {
      n--;
    }
    img.classList.add('ativoLeft');
    setTimeout(() => {
      img.classList.remove('ativoLeft');
    }, 300);
    img.src = `img/${srcImg[n]}`;
  }
  prev.addEventListener('click', prevImg);
}

animaSlide();
