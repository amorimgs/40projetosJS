const livros = [
  {
    nome: 'Dracula',
    src: 'assets/dracula.jpg',
    valor: 18,
    genero: 'terror',
    sinopse:
      'O amor e mais forte que a mote drácula e um romance de ficção gótica tendo como protagonista o conde drácula. Tornou-se a mais famosa historia de vampiros da literatura. O aclamado autor de literatura de terror Stephen king considerou drácula um dos três grandes clássicos do gênero. Estruturalmente, e um romance epistolar, ou seja, contado como uma serie de cartas, relatos em diário, jornais e registros de bordos. Drácula mistura ficção de terror, gótica e literatura de vampiros. Embora Stokes não tenha sido influenciado por contos anteriores, o seu romance foi responsável pela popularização dos vampiros através de muitas pecas de teatro, cinema e televisão. Drácula ganhou inúmeras interpretações ao longo dos séculos xx e xxi.',
  },
  {
    nome: 'Frankstein',
    src: './assets/frankenstein.jpg',
    valor: 39.9,
    genero: 'terror',
    sinopse:
      'O CLÁSSICO ESTÁ VIVO!No aniversário de duzentos anos de sua criação, FRANKENSTEIN volta a caminhar entre nós, numa edição monstruosa como só a DarkSide® Books poderia lançar. A obra-prima de Mary Shelley merece. Seu livro de estreia é um marco do romance gótico, verdadeiro ícone do terror e influência fundamental para o surgimento da ficção científica. ',
  },
  {
    nome: 'O cemitério',
    src: './assets/ocemiterio.jpg',
    valor: 18,
    genero: 'terror',
    sinopse:
      'O livro que inspirou o filme O cemitério maldito. Louis Creed, um jovem médico de Chicago, acredita que encontrou seu lugar em uma pequena cidade do Maine. A boa casa, o trabalho na universidade e a felicidade da esposa e dos filhos lhe trazem a certeza de que fez a melhor escolha. Num dos primeiros passeios pela região, conhecem um cemitério no bosque próximo à sua casa. Ali, gerações de crianças enterraram seus animais de estimação. Mas, para além dos pequenos túmulos, há um outro cemitério. Uma terra maligna que atrai pessoas com promessas sedutoras.',
  },
  {
    nome: 'Verity',
    src: './assets/verity.jpg',
    valor: 29.9,
    genero: 'romance',
    sinopse:
      'Um casal apaixonado. Uma intrusa. Três mentes doentias. Finalista do prêmio Goodreads como melhor romance de 2019, Verity é o primeiro thriller de Colleen Hoover e deixa os leitores envolvidos do começo ao fim.',
  },
  {
    nome: 'A Seleção',
    src: './assets/aselecao.jpg',
    valor: 29.9,
    genero: 'romance',
    sinopse:
      'Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa. Mas é claro que depois disso sua vida nunca mais será a mesma...',
  },

  {
    nome: 'Anna Kariênina',
    src: './assets/anna.jpg',
    valor: 22,
    genero: 'romance',
    sinopse:
      'Toda a diversidade, todo o encanto, toda a beleza da vida é feita de sombra e de luz”, escreve Liev Tolstói no romance que Fiódor Dostoiévski definiu como “impecável”. Publicado originalmente em forma de fascículos entre 1875 e 1877, antes de finalmente ganhar corpo de livro em 1877, Anna Kariênina continua a causar espanto. Como pode uma obra de arte se parecer tanto com a vida? Com absoluta maestria, Tolstói conduz o leitor por um salão repleto de música, perfumes, vestidos de renda, num ambiente de imagens vívidas e quase palpáveis que têm como pano de fundo a Rússia czarista.',
  },
  {
    nome: 'Pai rico pai probre',
    src: './assets/pairicopaipobre.jpg',
    valor: 49.07,
    genero: 'investimento',
    sinopse:
      'A escola prepara as crianças para o mundo real?  Essa é a primeira pergunta com a qual o leitor se depara neste livro.  O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. O mundo mudou; a maioria dos jovens tem cartão de crédito, antes mesmo de concluir os estudos, e nunca teve aula sobre dinheiro, investimentos, juros etc.',
  },
];

const container = document.querySelector('.container');
const buttons = document.querySelectorAll('[data-id]');

function loadingContent(menu) {
  const content = menu.map((item) => {
    return `
    <article class="item">
      <img class="foto" src="${item.src}" alt="">
      <div>
        <header>
          <h2 class="nome">${item.nome}</h2>
          <p class="valor">R$ ${item.valor.toFixed(2).replace('.', ',')}</p>
        </header>

        <p class="sinopse">${item.sinopse}</p>
      </div>
      </article>
`;
  });
  container.innerHTML = content.join('');
}

function alterarGenero() {
  let genero;
  if (this.dataset.id === 'todos') {
    genero = livros;
  } else {
    genero = livros.filter((item) => {
      return item.genero === this.dataset.id;
    });
  }
  buttons.forEach((i) => {
    i.classList.remove('active');
  });
  this.classList.add('active');
  loadingContent(genero);
}

buttons.forEach((item) => {
  item.addEventListener('click', alterarGenero);
});
window.addEventListener('DOMContentLoaded', () => {
  loadingContent(livros);
  buttons[0].classList.add('active');
});
