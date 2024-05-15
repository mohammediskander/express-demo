class Student {

    id;
    name;
    books;
    email;

    constructor(
        id,
        name,
        email,
        books = [],
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(id) {
        this.books.splice(this.books.findIndex(book => book.id  === id));
    }

}

module.exports = Student;
