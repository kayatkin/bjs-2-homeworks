class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(key, value) {
		return this.books.find(book => book[key] === value) || null;
	}

	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex(book => book.name === bookName);
		if (bookIndex !== -1) {
			const book = this.books[bookIndex];
			this.books.splice(bookIndex, 1);
			return book;
		}
		return null;
	}
}

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      const subjectMarks = this.marks[subject];
      if (!subjectMarks || subjectMarks.length === 0) {
        return 0;
      }
      const sum = subjectMarks.reduce((total, mark) => total + mark, 0);
      return parseFloat((sum / subjectMarks.length).toFixed(1));
    }
  
    getAverage() {
      const allSubjects = Object.keys(this.marks);
      if (allSubjects.length === 0) {
        return 0;
      }
      const totalSum = allSubjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0);
      return parseFloat((totalSum / allSubjects.length).toFixed(1));
    }
}