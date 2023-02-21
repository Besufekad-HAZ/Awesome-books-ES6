import { adjustLinks } from './modules/page-navigation.js'
import booksList from './modules/manage-books.js'
import addBookForm from './modules/add-new-book.js'
import './modules/current-Time.js'

adjustLinks()
addBookForm()
booksList.showBooks()
