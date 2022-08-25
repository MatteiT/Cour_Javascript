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
    this.myLibrary.map(() => this);
  }
}

const library = new Library();
// console.log(library);

library.addBookToLibrary(book1);
library.addBookToLibrary(book1);
library.addBookToLibrary(book1);
library.addBookToLibrary(book1);

library.displayBook(library.book);

// console.log(library.myLibrary);
