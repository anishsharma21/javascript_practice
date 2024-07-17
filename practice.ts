type Book = {
  title: string;
  author: string;
  isbn: string;
  stockQuantity: number;
};

type Inventory = {
  books: Array<Book>;
};

class BookStore {
  inventory: Inventory;

  constructor() {
    this.inventory = { books: [] };
  }

  addBook(book: Book) {
    const existingBookIndex = this.inventory.books.findIndex(
      (b) => b.isbn === book.isbn
    );
    if (existingBookIndex > -1) {
      this.inventory.books[existingBookIndex].stockQuantity +=
        book.stockQuantity;
    } else {
      this.inventory.books.push(book);
    }
  }
}

type User = {
  name: string;
  age: number;
  sayHello: () => void;
};

let user: User = {
  name: "Anish",
  age: 20,
  sayHello() {
    console.log("Hello");
  },
};

type Calculator = {
  read: () => void;
  sum: () => number;
  mul: () => number;
};

let calculator: Calculator = {
  read() {
    this.a = +(prompt("a?", "0") || "0");
    this.b = +(prompt("b?", "0") || "0");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
