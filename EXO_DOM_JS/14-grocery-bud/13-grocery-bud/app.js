// ****** SELECTIONNER LES ELEMENTS **********
const clear = document.querySelector('.clear-btn');
const submit = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const alert = document.querySelector('.alert');
const list = document.querySelector('.grocery-list');
const container = document.querySelector('.grocery-container');
const editBtn = document.querySelector('.edit-btn');
const delBtn = document.querySelector('.delete-btn');
let task = [];
// variables pour l'option éditer
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
// load items

// ****** FUNCTIONS **********
// add item
function addItem(e) {
  e.preventDefault();
  value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('grocery-items');
    const dataId = document.createAttribute('data-id');
    dataId.value = id;
    element.innerHTML = `
    <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="delete-btn">
          <i class="fa-solid fa-trash-can"></i>
          </button>
      </div>
    `;
    list.appendChild(element);
    displayAlert('bravo une nouvelle chose à acheter', 'success');
    container.classList.add('show-container');
    setBackToDefault();
  } else if (value && editFlag) {
  } else {
    displayAlert('il faut entrer quelque chose', 'danger');
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

function setBackToDefault() {
  if (value) {
    value == '';
  }
  if (editFlag) {
    editFlag === false;
  }
  if (editID) {
    editID == '';
  }
}

// clear items
clear.addEventListener('click', clearItems);

function clearItems() {
  const elements = document.querySelectorAll('article');
  elements.forEach(function (element) {
    element.remove();
  });
  displayAlert('vous avez supprimer toute les courses', 'danger');
}

// delete item
delBtn.addEventListener('click', deleteItem);
function deleteItem(e) {
  console.log(e);
  e.target.remove();
  displayAlert('vous avez bien supprimer la tâche', 'danger');
}

// edit item
editBtn.addEventListener('click', editItem);
function editItem(e) {}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  localStorage.setItem(id, value);
}

function editLocalStorage(id, value) {}

function getLocalStorage() {}

// ****** SETUP ITEMS **********

// recupere le tableau du local storage
// domcontentloaded if ! create []
function setupItems() {}

function createListItem(id, value) {}
