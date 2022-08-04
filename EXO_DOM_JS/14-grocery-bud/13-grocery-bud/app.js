// ****** SELECTIONNER LES ELEMENTS **********
const clear = document.querySelector('.clear-btn');
const submit = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
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
  console.log(grocery.value);
  console.log(id);
  if (value && editFlag === false) {
  } else if (value && editFlag === true) {
  } else {
  }
}
// display alert
function displayAlert(text, action) {}

function setBackToDefault() {}

// clear items
function clearItems() {}

// delete item
function deleteItem(e) {}

// edit item
function editItem(e) {}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {}

function editLocalStorage(id, value) {}

function getLocalStorage() {}

// ****** SETUP ITEMS **********
function setupItems() {}

function createListItem(id, value) {}
