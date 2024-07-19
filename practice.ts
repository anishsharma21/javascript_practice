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
/* while ((pos = myString.indexOf(target, pos + 1)) !== -1) {
  console.log(pos);
} */

let str: string = "Widget with id";
/* if (str.indexOf("id") !== -1) {
  console.log("We found it!");
} */

str = "stringify";
/* console.log(str.slice(0));
console.log(str.slice(0) === str);

console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("ê".codePointAt(0)); */

str = "";
/* for (let i: number = 65; i < 220; i++) {
  str += String.fromCodePoint(i);
} */
// console.log(str);

// console.log("Özerich".localeCompare("Zealand"));

export function ucFirst(str: string): string {
  return str.at(0)?.toUpperCase() + str.slice(1);
}

// console.log(ucFirst("hello"));

export function truncate(str: string, maxlength: number): string {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  }
  return str;
}

// console.log(truncate("What I would like to sell you in this course is", 20));
// console.log(truncate("Hi there how are ya doing?", 2));

function exportCurrencyValue(str: string): number {
  return +str.slice(1);
}

// console.log(exportCurrencyValue("$120"));

let myarr = [1, 2, 3, 4, 5];
myarr.length = 2;
// console.log(myarr);
// myarr.length = 5;
// console.log(myarr);
// console.log(myarr[3]);

let matrix = [[1, 2, 3], undefined, [7, 8, 9]];

// console.log(matrix.at(1)?.at(2));

/* let styles: Array<string> = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles); */

/* let arr: Array<any> = ["1", "2"];
arr.push(function (this: Array<any>) {
  console.log(this);
});
arr[2](); */

/* let myarr2: Array<string> = ["I", "study", "JavaScript", "right", "now"];
let removed: Array<string> = myarr2.splice(0, 2);
console.log(removed);
let myarr3: Array<string> = ["I", "study", "JavaScript", "right", "now"];
removed = myarr3.splice(1, 3, "eat", "donuts");
console.log(myarr3);
myarr3.forEach((item, index) =>
  console.log(`Item value is "${item}" at index ${index}`)
); */

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Anish" },
];

let targetUser = users.find((user) => user.id === 1);
// console.log(targetUser);

let characters: Array<string> = ["Bilbo", "Gandalf", "Nazgul"];
let lengths: Array<number> = characters.map((character) => character.length);
// console.log(characters, "\n" + lengths);

let arrNum: Array<number> = [1, 2, 3, 4, 5];
let sum: number = arrNum.reduce((acc, cur) => (acc += cur), 0);
console.log(sum);
