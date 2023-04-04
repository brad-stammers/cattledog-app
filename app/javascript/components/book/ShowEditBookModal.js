import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown } from "semantic-ui-react"

class ShowEditBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, genre_state: props.book.genre, format_state: props.book.format, };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }
  handleEdit(e) {
    e.preventDefault();
    if (this.state.editable) {
      let title = e.target.title.value;
      let author = e.target.author.value;
      let genre = this.state.genre_state;
      let series = e.target.series.value;
      let book_no = e.target.book_no.value;
      let format = this.state.format_state;
      let location = e.target.location.value;
      let isbn = e.target.isbn.value;
      let id = this.props.book.id;
      let book = { id: id, title: title, author: author, genre: genre, series: series, book_no: book_no, format: format, location: location, isbn: isbn };
      this.props.handleUpdate(book);
      this.props.handleCancel();
    }
    this.setState({ editable: !this.state.editable });
  }
  handleGenreChange(e, {value}) {
    this.setState({ genre_state: value})
  }
  handleFormatChange(e, {value}) {
    this.setState({ format_state: value})
  }
  render () {
    let formFields = {};
    let genreOptions = [
      { key: 'Biography', text: 'Biography', value: 'Biography' },
      { key: 'Fantasy', text: 'Fantasy', value: 'Fantasy' },
      { key: 'History', text: 'History', value: 'History' },
      { key: 'Humour', text: 'Humour', value: 'Humour' },
      { key: 'Non-Fiction', text: 'Non-Fiction', value: 'Non-Fiction' },
      { key: 'Science Fiction', text: 'Science Fiction', value: 'Science Fiction' },
      { key: 'Sport', text: 'Sport', value: 'Sport' },
      { key: 'Thriller', text: 'Thriller', value: 'Thriller' },
    ];
    let formatOptions = [
      { key: 'Paperback', text: 'Paperback', value: 'Paperback' },
      { key: 'Hardcover', text: 'Hardcover', value: 'Hardcover' },
      { key: 'eBook', text: 'eBook', value: 'eBook' },
    ];
    let dsp_format = this.props.book.format.map((format) =>
      <div class="ui small grey horizontal label">{format}</div>
    );
    let title = this.state.editable ? <input type="text" name="title" ref={input => formFields.title = input} defaultValue={this.props.book.title} /> : <h5>{this.props.book.title}</h5>;
    let author = this.state.editable ? <input type="text" name="author" ref={input => formFields.author = input} defaultValue={this.props.book.title} /> : <h5>{this.props.book.title}</h5>;
    let genre = this.state.editable ? <Dropdown name="genre" placeholder='Genre' fluid selection options={genreOptions} defaultValue={this.props.book.genre} onChange={this.handleGenreChange} /> : <div>{this.props.book.genre}</div>;
    let series = this.state.editable ? <input type="text" name="series" ref={input => formFields.series = input} defaultValue={this.props.book.series} /> : <h5>{this.props.book.series}</h5>;
    let book_no = this.state.editable ? <input type="text" name="book_no" ref={input => formFields.book_no = input} defaultValue={this.props.book.book_no} /> : <h5>{this.props.book.book_no}</h5>;
    let format = this.state.editable ? <Dropdown name="format" placeholder='Format' fluid multiple selection options={formatOptions} defaultValue={this.props.book.format} onChange={this.handleFormatChange} /> : <div>{dsp_format}</div>;
    let location = this.state.editable ? <input type="text" name="location" ref={input => formFields.location = input} defaultValue={this.props.book.location} /> : <h5>{this.props.book.location}</h5>;
    let isbn = this.state.editable ? <input type="text" name="isbn" ref={input => formFields.isbn = input} defaultValue={this.props.book.isbn} /> : <h5>{this.props.book.isbn}</h5>;
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="Edit Video" />
          <Modal.Content>
            <Form onSubmit={this.handleEdit}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input">{title}</div>
                </div>
              </div>
              <div class="field">
                <label>Author</label>
                <div class="seven wide field">
                  <div class="ui input">{author}</div>
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  <div class="ui input">{genre}</div>
                </div>
              </div>
              <div class="field">
                <label>Series</label>
                <div class="seven wide field">
                  <div class="ui input">{series}</div>
                </div>
              </div>
              <div class="field">
                <label>Book No</label>
                <div class="seven wide field">
                  <div class="ui input">{book_no}</div>
                </div>
              </div>
              <div class="field">
                <label>Format</label>
                <div class="seven wide field">
                  <div class="ui input">{format}</div>
              </div>
              </div>
              <div class="field">
                <label>Location</label>
                <div class="seven wide field">
                  <div class="ui input">{location}</div>
                </div>
              </div>
              <div class="field">
                <label>ISBN</label>
                <div class="seven wide field">
                  <div class="ui input">{isbn}</div>
                </div>
              </div>
              <Button negative type="button" icon="remove" labelPosition="right" onClick={this.props.handleCancel} content="Cancel" />
              <Button positive class="ui teal small button" type="submit" icon="checkmark" labelPosition="right" content={this.state.editable ? "Save" : "Edit"} />
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ShowEditBookModal
