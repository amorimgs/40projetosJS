const lorens = [
  'O primeiro do zodíaco, Áries, adora ser o número 1. Naturalmente, esse signo de fogo ama a competição. Ousado e ambicioso, Áries mergulha de cabeça até mesmo nas situações mais desafiadoras e vai garantir que sempre saia por cima!',
  'Qual é o signo mais propenso a tomar um banho de 6 horas, seguido de uma incrível massagem e uma sobremesa deliciosa? Touro, é claro! Como seu animal espiritual, os taurinos gostam de relaxar em ambientes serenos e agradáveis, cercados por sons e aromas suaves.',
  'Você já esteve tão ocupado que desejou poder se clonar apenas para conseguir realizar todas as tarefas? Essa é a experiência de ser um geminiano, em poucas palavras. Espontâneo, brincalhão e adoravelmente errante, Gêmeos é movido por sua curiosidade insaciável. Simbolizado pelos gêmeos celestiais, esse é um dos 12 signos que se interessa por tantas atividades que precisaria se multiplicar para dar conta de todas.',
  'Representado pelo caranguejo, que vive constantemente entre o mar e a costa, Câncer possui a capacidade de transitar, também, por dois lugares: nesse caso, pelos campos emocional e material. Os cancerianos são altamente intuitivos e suas habilidades psíquicas se manifestam na Terra. Porém, esse signo de água está disposto a fazer o que for preciso para se proteger emocionalmente. Para conhecer de verdade um canceriano, você precisará conquistar sua confiança!',
  'Estenda o tapete vermelho porque o leonino chegou! Apaixonado, leal e dramático, Leão é representado pelo animal leão e esse signo de fogo é o verdadeiro rei - ou rainha - da selva celestial. Vivazes, teatrais e intensos, os leoninos adoram se destacar e celebrar sua própria existência.',
  'Os virginianos são lógicos, práticos e sistemáticos em sua abordagem da vida. Virgem é um signo de terra historicamente representado pela deusa da agricultura, Deméter. Essa associação fala da presença profundamente enraizada de Virgem no mundo material. Esse é um dos 12 signos que é um grande perfeccionista e gosta de melhorar suas habilidades por meio da prática cuidadosa e consistente.',
  'Equilíbrio, harmonia e justiça definem a energia de Libra. Esse é um signo de ar cardinal e é representado pela balança (curiosamente, o único objeto inanimado do zodíaco), uma associação que reflete a fixação de Libra em estabelecer o equilíbrio. Ele é obcecado pela harmonia e se esforça para criar equilíbrio em todas as áreas da vida, especialmente no amor.',
  'Enigmático e misterioso, Escorpião é um dos signos mais incompreendidos do zodíaco. Esse é um signo de água que usa a energia emocional como combustível e que possui uma sabedoria poderosa tanto no campo físico quanto espiritual. De fato, Escorpião tem uma mente extraordinária, que vem de suas habilidades psíquicas, o que torna esse um dos 12 signos mais complicados e dinâmicos do zodíaco.',
  'Esse signo de fogo não conhece limites - representados pela figura do arqueiro, os sagitarianos estão sempre em busca de conhecimento. O último signo de fogo do zodíaco, Sagitário, gosta de realizar inúmeras atividades e aventuras geográficas, intelectuais e espirituais.',
  'Qual é a coisa mais valiosa da vida? Para Capricórnio, a resposta é clara: o tempo. Esse signo sabe que, somente com paciência, perseverança e dedicação é possível escalar a montanha da vida. O último signo de terra do zodíaco, Capricórnio, é representado pelo bode-marinho, uma criatura mitológica com corpo de bode e cauda de peixe. Assim, os capricornianos são hábeis em navegar tanto no mundo material quanto no emocional.',
  'Apesar do prefixo "aqua" em seu nome, Aquário é, na verdade, o último signo de ar do zodíaco. Inovador, progressista e abertamente revolucionário, é representado pelo portador da água, o curandeiro místico que dá água - ou vida - à Terra. Assim, Aquário é o signo astrológico mais humanitário e, no final das contas, ele é o único que se dedica verdadeiramente a tornar o mundo um lugar melhor.',
  'Ao lado da palavra "psiquismo" no dicionário, definitivamente deveria haver uma foto de Peixes. De todos, esse é o único dos 12 signos mais intuitivos, sensíveis e empáticos de todo o zodíaco. Por ser o último, Peixes absorve todas as coisas dos outros signos: suas alegrias e suas dores, suas esperanças e seus medos. É simbolizado por dois peixes nadando em direções opostas, representando sua constante transição entre fantasia e realidade.',
];
console.log(lorens);
const button = document.querySelector('button');
const input = document.querySelector('input');
const article = document.querySelector('article');

const initLorem = (event) => {
  article.innerText = '';
  event.preventDefault();
  const newArray = lorens.slice(0, input.value);
  newArray.forEach((item) => {
    article.innerHTML += `<p>${item}</p>`;
  });
};

button.addEventListener('click', initLorem);
