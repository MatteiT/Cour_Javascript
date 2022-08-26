const form = document.querySelector('.form');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const boxInput = document.querySelector('.read');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `Le ${this.title} de ${this.author}, ${this.pages} ${this.read}`;
  }
}

const book1 = new Book('LOTR', 'Tolkien', 1500, true);

console.log(book1.info());

class Library {
  constructor(myLibrary) {
    this.myLibrary = [];
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
  }

  displayBook() {
    this.myLibrary.map(() => console.log(this));
  }
}
const library = new Library();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //* declarer les value
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isChecked = form.box.checked;

  console.log(title, author, pages, isChecked);

  // * regarder si les value sont vides ou non valide
  if (!title || !author || !pages || !isChecked) {
    // ! mettre un message d'erreur
  } else {
    // *instancier un nouveau livre et le placer dans la class Library
    const book = new Book(title, author, pages, isChecked);
    library.addBookToLibrary(book);
    library.displayBook(library.book);
  }

  // *ajouter le livre dans le local storage
  addToLocalStorage();
});

library.addBookToLibrary(book1);

// !local storage
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function addToLocalStorage(title, author, pages, read) {
  const book = { title, author, pages, read };
  let items = getLocalStorage();

  items.push(book);
  localStorage.setItem('list', JSON.stringify(items));
}
