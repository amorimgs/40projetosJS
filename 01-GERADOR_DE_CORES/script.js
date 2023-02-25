const hex = ['0','1', '2', '3', '4','5','6','7','8','9','A','B','C','D','E','F'  ];

const cor = document.querySelector('.cor')
const btn = document.querySelector('.btn')

function randomNumer() {
    return Math.floor(Math.random() * hex.length);
}

const gerar= () =>{
    let hexColor= '#'
   for(let i = 0; i<6; i++){
    hexColor += hex[randomNumer()]
   }
console.log(hexColor)
   cor.innerHTML = `Background-color: ${hexColor}`
   window.document.body.style.backgroundColor = hexColor
}

btn.addEventListener('click', gerar)