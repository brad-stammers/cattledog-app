import React from "react"
import PropTypes from "prop-types"
import ShowEditBookModal from "./ShowEditBookModal"

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, show_visible: false, };
  }
  showModal = () => {
    this.setState({ show_visible: true, });
  }
  handleCancel = () => {
    this.setState({ show_visible: false, });
  }
  render () {
    let dsp_format = this.props.book.format.map((format) =>
      <div class="ui small grey horizontal label">{format}</div>
    );
    return (
      <React.Fragment>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.genre}</td>
        <td>{this.props.book.series}</td>
        <td>{this.props.book.book_no}</td>
        <td>{dsp_format}</td>
        <td>
          <button onClick={this.showModal} class="ui teal small button">Show</button>
          <button onClick={() => this.props.handleDelete(this.props.book.id)}  className="ui small button">Delete</button>
        </td>
        <ShowEditBookModal visible={this.state.show_visible} handleCancel={this.handleCancel} handleUpdate={this.props.handleUpdate} book={this.props.book} />
      </React.Fragment>
    );
  }
}

export default Book
