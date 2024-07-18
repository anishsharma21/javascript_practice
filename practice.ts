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

let myString: string = "as sly as a fox, as strong as an ox";
let target: string = "as";
let pos: number = -1;
while ((pos = myString.indexOf(target, pos + 1)) !== -1) {
  console.log(pos);
}

let str: string = "Widget with id";
if (str.indexOf("id") !== -1) {
  console.log("We found it!");
}

str = "stringify";
/* console.log(str.slice(0));
console.log(str.slice(0) === str);

console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("ê".codePointAt(0)); */

str = "";
for (let i: number = 65; i < 220; i++) {
  str += String.fromCodePoint(i);
}
// console.log(str);

// console.log("Özerich".localeCompare("Zealand"));

export default function ucFirst(str: string): string {
  return str.at(0)?.toUpperCase() + str.slice(1);
}

console.log(ucFirst("hello"));
