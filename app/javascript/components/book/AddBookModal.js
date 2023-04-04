import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown } from "semantic-ui-react"

class AddBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { genre_state: [], format_state: [], };
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let author = e.target.author.value;
    let genre = this.state.genre_state;
    let series = e.target.series.value;
    let book_no = e.target.book_no.value;
    let format = this.state.format_state;
    let location = e.target.location.value;
    let isbn = e.target.isbn.value;
    this.props.handleFormSubmit(title, author, genre, series, book_no, format, location, isbn);
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
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="New Book" />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="title" ref={input => formFields.title = input} placeholder="Title" /></div>
                </div>
              </div>
              <div class="field">
                <label>Author</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="author" ref={input => formFields.author = input} placeholder="Author" /></div>
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Dropdown name="genre" placeholder='Genre' fluid selection options={genreOptions} onChange={this.handleGenreChange} />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Series</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="series" ref={input => formFields.series = input} placeholder="Series" /></div>
                </div>
              </div>
              <div class="field">
                <label>Book No</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="book_no" ref={input => formFields.book_no = input} placeholder="Book No" /></div>
                </div>
              </div>
              <div class="field">
                <label>Format</label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Dropdown name="format" placeholder='Format' fluid multiple selection options={formatOptions} onChange={this.handleFormatChange} />
                  </div>
              </div>
              </div>
              <div class="field">
                <label>Location</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="location" ref={input => formFields.location = input} placeholder="Location" /></div>
                </div>
              </div>
              <div class="field">
                <label>ISBN</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="isbn" ref={input => formFields.isbn = input} placeholder="ISBN" />
                  </div>
                </div>
              </div>
              <Button negative type="button" icon="remove" labelPosition="right" onClick={this.props.handleCancel} content="Cancel" />
              <Button positive type="submit" icon="checkmark" labelPosition="right" content="Save" />
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddBookModal
