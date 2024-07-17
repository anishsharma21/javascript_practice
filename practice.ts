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

interface Calculator {
  a: number;
  b: number;
  sum: () => number;
  mul: () => number;
}

function createCalculator(a: number, b: number): Calculator {
  return {
    a,
    b,
    sum: function () {
      return this.a + this.b;
    },
    mul: function () {
      return this.a * this.b;
    },
  };
}

let calculator = createCalculator(2, 3);

let ladder = {
  step: 0,
  up() {
    this.step++;
    this.showStep();
    return this;
  },
  down() {
    this.step--;
    this.showStep();
    return this;
  },
  showStep: function () {
    console.log(this.step);
  },
};

interface Accumulator {
  value: number;
  read: () => Accumulator;
}

function createAccumulator(startingValue: number = 0): Accumulator {
  return {
    value: startingValue,
    read: function () {
      console.log(this.value++);
      return this;
    },
  };
}

let accumulator = createAccumulator();
accumulator.read().read();
