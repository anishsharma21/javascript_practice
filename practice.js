var BookStore = /** @class */ (function () {
    function BookStore() {
        this.inventory = { books: [] };
    }
    BookStore.prototype.addBook = function (book) {
        var existingBookIndex = this.inventory.books.findIndex(function (b) { return b.isbn === book.isbn; });
        if (existingBookIndex > -1) {
            this.inventory.books[existingBookIndex].stockQuantity +=
                book.stockQuantity;
        }
        else {
            this.inventory.books.push(book);
        }
    };
    return BookStore;
}());
var user = {
    name: "Anish",
    age: 20,
    sayHello: function () {
        console.log("Hello");
    },
};
var calculator = {
    read: function () {
        this.a = +(prompt("a?", "0") || "0");
        this.b = +(prompt("b?", "0") || "0");
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
