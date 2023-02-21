import { currentActivelink } from './page-navigation.js'
// class for the books container

class AwesomeBooks {
  constructor () {
    this.books = JSON.parse(localStorage.getItem('books')) || []
  }

  showBooks = () => {
    let booksHTML = ''
    if (this.books.length === 0) {
      document.querySelector('#books_container > p').style.display = 'block'
    } else {
      document.querySelector('#books_container > p').style.display = ''
    }
    this.books.forEach((book) => {
      booksHTML += `
        <div class='book'>
          <p>
            <span>"${book.title}"</span>
            by
            <span>${book.author}</span>
          </p>
          <button class="remove-book-button" id="${book.id}">Remove</button>
        </div>
      `
    })
    const listOfBooks = document.getElementById('book_list')
    listOfBooks.innerHTML = booksHTML

    const booksRemoveBtn = document.querySelectorAll('.remove-book-button')
    booksRemoveBtn.forEach((button) => {
      button.addEventListener('click', () => {
        this.removeBook(Number(button.id))
      })
    })
    window.location.href = '#books_container'
    currentActivelink(0)
  }

  addBook = (title, author) => {
    const id = Math.round(Math.random() * 10000)

    // spread to display individual books...

    this.books = [...this.books, { id, title, author }]
    localStorage.setItem('books', JSON.stringify(this.books))
    this.showBooks()
  }

  removeBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== bookId)
    localStorage.setItem('books', JSON.stringify(this.books))
    this.showBooks()
  }
}

const booksList = new AwesomeBooks()
export default booksList
