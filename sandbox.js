function slow(x) {
  console.log(`Function called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

let animal = {
  eats: true,
  walk() {
    if (!this.isSleeping) {
      console.log("walking...");
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  jumps: true,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

rabbit.__proto__ = animal;
rabbit.walk();

rabbit.walk = function () {
  console.log("hops...");
};

rabbit.walk();
rabbit.sleep();
console.log(rabbit.isSleeping);

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(prop);
  }
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let newrabbit = new Rabbit("White Rabbit");
console.log(newrabbit.eats);

class Animal {
  constructor(name) {
    this.name = name;
  }
}

try {
  JSON.parse("{bad JSON}");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
