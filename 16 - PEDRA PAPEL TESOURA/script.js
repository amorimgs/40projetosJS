const user = document.querySelector('.user');
const comp = document.querySelector('.oponente');
const mensagem = document.querySelector('.mensagem');
const options = document.querySelectorAll('[data-opcao]');

let scoreUser = 0;
let scoreComp = 0;

// GERA UM NUMERO ALEATORIO
function gerarNumber() {
  const number = Math.floor(Math.random() * 3) + 1;
  return number;
}
// CONVERTE NUMERO GERADO EM OPCAO
function converteNumberEmEscolha() {
  const number = gerarNumber();
  switch (number) {
    case 1:
      return 'pedra';
      break;
    case 2:
      return 'papel';
      break;
    default:
      return 'tesoura';
  }
}
//Altera Mensagem de resultado para o usuario
function alteraMensagem(texto, classe) {
  mensagem.classList.remove('win');
  mensagem.classList.remove('tie');
  mensagem.classList.remove('lose');
  mensagem.textContent = texto;
  mensagem.classList.add(classe);
}
// Calcula o Vencedor e Gera o resultado
function gerarResultado(escolha, pc) {
  switch (pc) {
    case 'papel':
      switch (escolha) {
        case 'papel':
          alteraMensagem('Empate. Comp escolheu Papel.', 'tie');
          break;
        case 'pedra':
          alteraMensagem('Derrota. Comp escolheu Papel.', 'lose');
          scoreComp++;
          break;
        case 'tesoura':
          alteraMensagem('Vitória. Comp escolheu Papel.', 'win');
          scoreUser++;
          break;
      }
      break;
    case 'pedra':
      switch (escolha) {
        case 'papel':
          alteraMensagem('Vitória. Comp escolheu pedra.', 'win');
          scoreUser++;
          break;
        case 'pedra':
          alteraMensagem('Empate. Comp escolheu pedra.', 'tie');
          break;
        case 'tesoura':
          alteraMensagem('Derrota. Comp escolheu pedra.', 'lose');
          scoreComp++;
          break;
      }
      break;
    case 'tesoura':
      switch (escolha) {
        case 'papel':
          alteraMensagem('Derrota. Comp escolheu tesoura.', 'lose');
          scoreComp++;
          break;
        case 'pedra':
          alteraMensagem('Vitória. Comp escolheu tesoura.', 'win');
          scoreUser++;
          break;
        case 'tesoura':
          alteraMensagem('Empate. Comp escolheu tesoura.', 'tie');
          break;
      }
      break;
  }
}

//Atualiza o score
function alteraScore() {
  user.textContent = scoreUser;
  comp.textContent = scoreComp;
}

//Ativa o "GAME" de acordo com a opcao do usuario
function activeGame() {
  const eu = this.getAttribute('data-opcao');
  const computador = converteNumberEmEscolha();

  gerarResultado(eu, computador);
  alteraScore();
}

//Adiciona Event
options.forEach((item) => {
  item.addEventListener('click', activeGame);
});
