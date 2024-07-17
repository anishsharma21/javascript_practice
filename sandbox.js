let user = {
  name: "Anish",
};

let id = Symbol("id");
user[id] = 1;

console.log(Object.keys(user));
