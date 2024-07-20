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
// console.log(sum);

function merge_sort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }
  let mid: number = Math.floor(arr.length / 2);
  let left: Array<number> = merge_sort(arr.slice(0, mid));
  let right: Array<number> = merge_sort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: Array<number>, right: Array<number>): Array<number> {
  let i: number = 0,
    j: number = 0;
  let sorted: Array<number> = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }
  return sorted.concat(left.slice(i)).concat(right.slice(j));
}

let unsorted_arr: Array<number> = [4, 1, 3, 2];
let sorted_arr = merge_sort(unsorted_arr);
// console.log(sorted_arr);

type Salaries = {
  [key: string]: number;
};

function sumSalaries(salariesData: Salaries): number {
  return Object.values(salariesData).reduce((acc, cur) => acc + cur);
}

function countSalaries(salaries: Salaries): number {
  return Object.entries(salaries).reduce((acc) => ++acc, 0);
}

let salaries: Salaries = {
  John: 100,
  Pete: 300,
  Mary: 150,
};

// console.log(topsalaries(salaries));

function topsalaries(salaries: Salaries): string {
  let name: string = "";
  let topsalaries: number = 0;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > topsalaries) {
      name = key;
      topsalaries = value;
    }
  }
  return name;
}

/* console.log(sumSalaries(salaries));
console.log(countSalaries(salaries)); */

type Options = {
  title: string;
  width: number;
  height: number;
};

let options: Options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;
let { title: t, width: w, height: h } = options;
let { title: ttl, ...rest } = options;

/* console.log(title, width, height);
console.log(t, w, h);
console.log(ttl, rest); */

type Person = {
  name: string;
  years: number;
  isAdmin?: boolean;
};

let person: Person = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = person;

// console.log(Object.entries(salaries));

let now: Date = new Date();
// console.log(now);

let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);

let date = new Date();
/* console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear()); */

function diffSubtract(date1: number, date2: number): number {
  return date2 - date1;
}

function diffGetTime(date1: Date, date2: Date): number {
  return date2.getTime() - date1.getTime();
}

function bench(f: Function): number {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 1000000; i++) f(date1, date2);
  return Date.now() - start;
}

/* bench(diffSubtract);
bench(diffGetTime); */

let time1: number = 0;
let time2: number = 0;

let times1: Array<number> = [];
let times2: Array<number> = [];

/* for (let i = 0; i < 10; i++) {
  let t1: number = bench(diffSubtract);
  let t2: number = bench(diffGetTime);
  (time1 += t1), (time2 += t2);
  times1.push(t1), times2.push(t2);
} */

/* console.log(times1);
console.log(times2);
console.log(times1.reduce((sum, cur) => sum + cur) / times1.length);
console.log(times2.reduce((sum, cur) => sum + cur) / times2.length); */

let Feb20_2012 = Date.parse("2012-02-20T03:03:12");
// console.log(Feb20_2012);

function getWeekDay(date: Date): string {
  let days: Array<string> = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date3 = new Date(2012, 0, 3);
// console.log(getWeekDay(date3));

let student = {
  name: "Anish",
  age: 23,
  isAdmin: false,
  courses: ["html", "css", "python"],
  spouse: null,
};

let json: string = JSON.stringify(student);
// console.log(json);

interface LooseObject {
  [key: string]: any;
}

let room: LooseObject = {
  number: 23,
};

let meetup: LooseObject = {
  title: "conference",
  participants: ["john", "ann"],
};

meetup.place = room;
room.occupiedBy = meetup;

let numbers: string = "[0, 1, 2, 3, 4]";
numbers = JSON.parse(numbers);
// console.log(numbers);

let string2: string =
  '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup2 = JSON.parse(string2, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

// console.log(meetup2.date.getDate());
