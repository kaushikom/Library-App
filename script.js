const submitForm = document.getElementById("add-book-card-button");
const form = document.getElementById("form");
const addBook = document.getElementById("add-book");
const popup = document.getElementById("popup");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not read yet";
    this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
  }

  addToLibrary() {
    myLibrary.unshift(this);
  }
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}

function toggleDisplay(obj) {
  if (obj.style.visibility == "visible") {
    obj.style.visibility = "hidden";
  } else {
    obj.style.visibility = "visible";
  }
}

function setColor(string) {
  if (string == "Not read yet") {
    return "#9dc1ff";
  } else if (string == "Read") {
    return "#8fe58c";
  }
}

function toggleStatus(i) {
  const obj = document.getElementById(i);
  if (obj.textContent == "Read") {
    obj.textContent = "Not read yet";
    obj.style.backgroundColor = "#9dc1ff";
    const book = myLibrary[i];
    book.read = "Not read yet";
  } else {
    obj.textContent = "Read";
    obj.style.backgroundColor = "#8fe58c";
    const book = myLibrary[i];
    book.read = "Read";
  }
}

function displayBooks() {
  const cardContainer = document.querySelector(".card");
  cardContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookObj = document.createElement("div");
    bookObj.innerHTML = "";
    bookObj.classList.add("book-card");
    const bgColor = setColor(book.read);
    bookObj.innerHTML = `
    <h2 id="book-name">${book.title}</h2>
    <li><span>Author : </span><span id="author">${book.author}</span></li>
    <li><span>No. of Pages : </span><span id="npages">${book.pages}</span></li>
    <button id="${i}" class="status" style = "background-color: ${bgColor}" onclick = 'toggleStatus(${i})'>${book.read}</button>
    <button class="remove" onClick ='removeBook(${i})'>Remove</button>
    `;
    cardContainer.appendChild(bookObj);
    setColor();
  }
}

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("writer").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const book = new Book(name, author, pages, read);
  book.addToLibrary();
  displayBooks();
  form.reset();
  toggleDisplay(popup);
});

addBook.addEventListener("click", () => {
  toggleDisplay(popup);
});
