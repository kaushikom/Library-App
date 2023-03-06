let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Read" : "Not read yet";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBooksToLibrary(title, author, page, read) {
  let book = new Book(title, author, page, read);
  myLibrary.unshift(book);
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
                <button id="status" style = "background-color: ${bgColor}" >${book.read}</button>
                <button class="remove" onClick ='removeBook(${i})'>Remove</button>
   `;
    cardContainer.appendChild(bookObj);
    setColor();
  }
}

// addBooksToLibrary();

// console.log(myLibrary);

function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}
const submitForm = document.getElementById("add-book-card-button");
const form = document.getElementById("form");

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("writer").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBooksToLibrary(name, author, pages, read);
  displayBooks();
  form.reset();
  toggleDisplay(popup);
  // toggleDisplay(addBook);
});

function toggleDisplay(obj) {
  if (obj.style.visibility == "visible") {
    obj.style.visibility = "hidden";
  } else {
    obj.style.visibility = "visible";
  }
}

const addBook = document.getElementById("add-book");
const popup = document.getElementById("popup");

addBook.addEventListener("click", () => {
  // popup.classList.toggle("display");
  toggleDisplay(popup);
  // toggleDisplay(addBook);
});

function setColor(string) {
  if (string == "Not read yet") {
    return "#9dc1ff";
  } else if (string == "Read") {
    return "#8fe58c";
  }
}

function toggleStatus(string) {
  if (string == "Not read yet") {
    string = "Read";
  } else {
    string = "Not read yet";
  }
  console.log("tS");
}

function changeStatus(string) {
  toggleStatus(string);
  // setColor(string);
}

// style="background-color: ;"
