//Selecionando os elementos do DOM --------------
const form = document.querySelector('form');
const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const editar = document.querySelector('.editar');
const remover = document.querySelectorAll('.remover');
const list = document.querySelector('.list');
const alert = document.querySelector('.alert');
const limparLista = document.querySelector('.limparLista');

//OPCOES EDITAVEIS --------------------
let editElement;
let editFlag = false;
let editID = '';

// EVENTLISTNERS -------------
form.addEventListener('submit', addItem);
limparLista.addEventListener('click', limparItensLista);
window.addEventListener('DOMContentLoaded', setupItens);
// FUNCTIONS -----------------
function addItem(e) {
  e.preventDefault();
  const value = input.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    criarListaItens(id, value);
    displayAlert('Item Adicionado', 'sucess');

    input.value = '';
    input.focus();
    limparLista.classList.add('on');

    // localstorage
    addLocalStorage(id, value);

    voltarPadrao();
  } else if (value && editFlag) {
    editElement.textContent = value;
    editLocalStorage(editID, value);
    displayAlert('Valor alterado', 'sucess');
    voltarPadrao();
  } else {
    displayAlert('Digite um valor', 'alertError');
  }
}

// display alert
function displayAlert(text, classe) {
  alert.textContent = text;
  alert.classList.add(classe);

  //remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(classe);
  }, 1000);
}
// resetar padroes
function voltarPadrao() {
  input.value = '';
  editFlag = false;
  editID = '';
  submit.textContent = 'Add';
}

function limparItensLista() {
  const itens = document.querySelectorAll('.item');
  if (itens.length > 0) {
    itens.forEach((item) => {
      list.removeChild(item);
    });
    displayAlert('Itens removidos', 'alertError');

    limparLista.classList.remove('on');
  }
  voltarPadrao();
  localStorage.removeItem('list');
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);
  displayAlert('Item removido', '.alertError');
  if (list.childNodes.length === 0) {
    limparLista.classList.remove('on');
  }
  voltarPadrao();
  removeLocalStorage(id);
}
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //editar formulario
  input.value = editElement.textContent;
  editFlag = true;
  submit.textContent = 'Edit';
  editID = element.dataset.id;
  input.focus();
}

// LOCALSTORAGE ----------------------------//
function addLocalStorage(id, value) {
  const item = { id, value };

  let itens = getLocalStorage();
  itens.push(item);
  localStorage.setItem('list', JSON.stringify(itens));
}
function removeLocalStorage(id) {
  let itens = getLocalStorage();
  itens = itens.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(itens));
}
function editLocalStorage(id, value) {
  let itens = getLocalStorage();
  console.log(id, value, itens);
  itens = itens.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(itens));
}
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
//SETUP OPTIONS ---------------------------------//
function setupItens() {
  let itens = getLocalStorage();
  if (itens.length > 0) {
    itens.forEach((item) => {
      criarListaItens(item.id, item.value);
    });
  }
  limparLista.classList.add('on');
}

function criarListaItens(id, value) {
  const element = document.createElement('article');
  element.classList.add('item');
  const atribute = document.createAttribute('data-id');
  atribute.value = id;
  element.setAttributeNode(atribute);
  element.innerHTML = `<p class="titulo">${value}</p>
  <div class="buttons">
    <button class="editar">editar</button>
    <button class="remover">excluir</button>
  </div>`;

  const editar = element.querySelector('.editar');
  const remover = element.querySelector('.remover');
  editar.addEventListener('click', editItem);
  remover.addEventListener('click', deleteItem);
  //appenChild
  list.appendChild(element);
}
