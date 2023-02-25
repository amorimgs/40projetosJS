const dados = [
  {
    src: 'assets/image1.jpg',
    nome: 'Paulo Castro',
    cargo: 'WEB DEVELOPER',
    comentario:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nobis reprehenderit debitis ut officiis hic cumque placeat saepe eius aliquid sit veniam vero iusto deleniti expedita sint, repellat quos incidunt.',
  },
  {
    src: 'assets/image2.jpg',
    nome: 'Daniela Sobrado',
    cargo: 'DESIGNER',
    comentario:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nobis reprehenderit .',
  },
  {
    src: 'assets/image3.jpg',
    nome: 'Paola',
    cargo: 'CEO',
    comentario:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nobis reprehenderit debitis ut officiis hic cumque placeat saepe eius aliquid sit veniam vero iusto deleniti expedita sint.',
  },
  {
    src: 'assets/image4.jpg',
    nome: 'Romero Henrique',
    cargo: 'BACK-END DEVELOPER',
    comentario:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nobis reprehenderit debitis ut officiis hic cumque placeat saepe eius aliquid sit veniam vero iusto deleniti expedita sint, repellat quos incidunt, repellat quos incidunt, repellat quos incidunt..',
  },
  {
    src: 'assets/image5.jpg',
    nome: 'João Pedro',
    cargo: 'ANALISTA',
    comentario: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  },
];

const img = document.querySelector('.img');
const nome = document.querySelector('.nome');
const cargo = document.querySelector('.cargo');
const comentario = document.querySelector('.comentario');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const aleatorio = document.querySelector('.aleatorio');

let c = 0;

function alteraDados(index) {
  img.src = dados[index].src;
  nome.innerText = dados[index].nome;
  cargo.innerText = dados[index].cargo;
  comentario.innerText = dados[index].comentario;
}

function verificaContador() {
  if (c === 5) {
    c = 0;
  } else if (c < 0) {
    c = 4;
  }
}

aleatorio.addEventListener('click', () => {
  c = Math.floor(Math.random() * 5);
  alteraDados(c);
});

next.addEventListener('click', () => {
  c++;
  verificaContador(c);
  alteraDados(c);
});

prev.addEventListener('click', () => {
  c--;
  verificaContador(c);
  alteraDados(c);
});
