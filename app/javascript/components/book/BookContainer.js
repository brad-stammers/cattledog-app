import React from "react"
import PropTypes from "prop-types"
import BookIndex from "./BookIndex"
import AddBookModal from "./AddBookModal"

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], add_visible: false, };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }
  handleFormSubmit(title, author, genre, series, book_no, format, location, isbn) {
    let body = JSON.stringify({book: {title: title, author: author, genre: genre, series: series, book_no: book_no, format: format, location: location, isbn: isbn,  }});
    fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }).then((response) => {return response.json()})
    .then((book) => {this.addNewBook(book)})
  }
  addNewBook(book) {
    this.setState({ books: this.state.books.concat(book)})
    this.setState({ add_visible: false, });
  }
  handleUpdate(book) {
    fetch('http://localhost:3000/api/v1/books/' + book.id, {
      method: 'PUT',
      body: JSON.stringify({book: book}),
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => { this.updateBook(book) })
  }
  updateBook(book) {
    let newBooks = this.state.books.filter((f) => f.id !== book.id);
    newBooks.push(book);
    this.setState({ books: newBooks })
  }
  handleDelete(id) {
    fetch('http://localhost:3000/api/v1/books/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => {this.deleteBook(id)})
  }
  deleteBook(id) {
    let newBooks = this.state.books.filter((book) => book.id !== id)
    this.setState({ books: newBooks })
  }
  showAddModal = () => {
    this.setState({ add_visible: true, });
  }
  handleCancel = () => {
    this.setState({ add_visible: false,});
  }
  loadBooks() {
    fetch('./api/v1/books.json')
    .then((response) => { return response.json()})
    .then((data) => {this.setState({ books: data })});
  }

  componentDidMount() {
    this.loadBooks();
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.showAddModal} className="ui small primary basic button">Add Book</button>
        <AddBookModal visible={this.state.add_visible} handleCancel={this.handleCancel} handleFormSubmit={this.handleFormSubmit} books={this.state.books} />
        <BookIndex books={this.state.books} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </React.Fragment>
    );
  }
}

export default BookContainer
