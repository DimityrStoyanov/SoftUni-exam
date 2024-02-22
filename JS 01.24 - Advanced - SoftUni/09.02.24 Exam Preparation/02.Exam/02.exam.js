//         let theWine = this.wines.find(obj => obj.wineName === wineName)

class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let book = {
            title: title,
            author: author
        }
        let theBook = this.books.find(obj => obj.title === title)
        if (theBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push(book)
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName) {
        let searchedMember = this.members.includes(memberName);

        if (searchedMember) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName)
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember(memberName, bookTitle) {
        let searchedMember = this.members.includes(memberName);
        let theBook = this.books.find(obj => obj.title === bookTitle)

        if (!searchedMember) {
            throw new Error(`Member ${memberName} not found.`)
        }

        if (!theBook) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }

        let index = this.books.indexOf(theBook);
        this.books.splice(index, 1)
        return `Member ${memberName} has been assigned the book "${theBook.title}" by ${theBook.author}.`
    }

    generateReadingReport() {
        if (this.members.length == 0) {
            return `No members in the book club.`
        }
        if (this.books.length == 0) {
            return `No available books in the library.`
        }

        let result = `Available Books in ${this.library} library:\n`
        let bookArr = this.books
        for (let book of bookArr) {
            let bookName = book.title;
            let bookAutor = book.author;
            let infoForBook = `"${bookName}" by ${bookAutor}\n`
            result += infoForBook
        }
        let newResult = result.slice(0, -1)
        return newResult

    }
}



const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addBook("Konnan", "Dimitar Stoyanov"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
