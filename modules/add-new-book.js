import booksList from './manage-books.js'

const addBookForm = () => {
  document.querySelector('#add_new_book_btn')
    .addEventListener('click', (event) => {
      event.preventDefault()
      const addBookForm = document.forms.add_book_form
      const bookTitle = addBookForm.elements.bookTitleInput.value
      const bookAuthor = addBookForm.elements.bookAuthorInput.value
      if (bookTitle.trim() !== '' && bookAuthor.trim() !== '') {
        booksList.addBook(bookTitle, bookAuthor)
        addBookForm.reset()
      }
    })
}

export default addBookForm
