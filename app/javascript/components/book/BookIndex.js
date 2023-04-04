import React from "react"
import PropTypes from "prop-types"
import Book from "./Book"

class BookIndex extends React.Component {
  render () {
    var books = this.props.books.map((book) => {
      return(
        <tr key={book.id} scope="row">
          <Book book={book} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} />
        </tr>
      )
    })
    return (
      <React.Fragment>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Series</th>
            <th>Book No</th>
            <th>Format</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default BookIndex
