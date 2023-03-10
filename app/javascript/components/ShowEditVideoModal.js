import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown } from "semantic-ui-react"
class ShowEditVideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, genre_state: null };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }
  handleEdit() {
    if (this.state.editable) {
      let title = this.title.value;
      let genre = this.state.genre_state;
      let year = this.year.value;
      let rating = this.rating.value;
      let format = this.format.value;
      let location = this.location.value;
      let id = this.props.video.id;
      let video = { id: id, title: title, genre: genre, year: year, rating: rating, format: format, location: location };
      this.props.handleUpdate(video);
      this.props.handleCancel();
    }
    this.setState({ editable: !this.state.editable });
  }
  handleGenreChange(e) {
    this.setState({ genre_state: e.target.textContent})
  }
  render () {
    let formFields = {};
    let genreOptions = [
      { key: 'Action', text: 'Action', value: 'Action' },
      { key: 'Comedy', text: 'Comedy', value: 'Comedy' },
      { key: 'Drama', text: 'Drama', value: 'Drama' },
      { key: 'Fantasy', text: 'Fantasy', value: 'Fantasy' },
      { key: 'Romance', text: 'Romance', value: 'Romance' },
      { key: 'Science Fiction', text: 'Science Fiction', value: 'Science Fiction' },
      { key: 'Thriller', text: 'Thriller', value: 'Thriller' },
    ]
    // genre field variants
    // let genre_disp = <div class="ui input"><h5>{this.props.video.genre}</h5></div>
    // let genre_edit = <Dropdown placeholder='Genre' fluid selection options={genreOptions} defaultValue={this.props.video.genre} onChange={this.handleGenreChange} />
    let title = this.state.editable ? <input type="text" ref={input => this.title = input} defaultValue={this.props.video.title} /> : <h5>{this.props.video.title}</h5>;
    let genre = this.state.editable ? <Dropdown name="genre" placeholder='Genre' fluid selection options={genreOptions} defaultValue={this.props.video.genre} onChange={(e) => this.handleGenreChange(e)} /> : <div class="ui input"><h5>{this.props.video.genre}</h5></div>;
    let year = this.state.editable ? <input type="text" ref={input => this.year = input} defaultValue={this.props.video.year} /> : <h5>{this.props.video.year}</h5>;
    let rating = this.state.editable ? <input type="text" ref={input => this.rating = input} defaultValue={this.props.video.rating} /> : <h5>{this.props.video.rating}</h5>;
    let format = this.state.editable ? <input type="text" ref={input => this.format = input} defaultValue={this.props.video.format} /> : <h5>{this.props.video.format}</h5>;
    let location = this.state.editable ? <input type="text" ref={input => this.location = input} defaultValue={this.props.video.location} /> : <h5>{this.props.video.location}</h5>;
    return (
      <React.Fragment>
      <Modal open={this.props.visible} size="small">
        <Header content="Edit Video" />
          <Modal.Content>
            <Form onSubmit={(e) => {
              this.props.handleEdit(formFields.title.value, this.state.genre_state, formFields.year.value, formFields.rating.value, formFields.format.value, formFields.location.value);
              e.target.reset();
            }}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input">{title}</div>
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  <div class="ui input">{genre}</div>
                </div>
              </div>
              <div class="field">
                <label>Year</label>
                <div class="seven wide field">
                  <div class="ui input">{year}</div>
                </div>
              </div>
              <div class="field">
                <label>Rating</label>
                <div class="seven wide field">
                  <div class="ui input">{rating}</div>
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
              <Button negative type="button" icon="remove" labelPosition="right" onClick={this.props.handleCancel} content="Cancel" />
              <Button positive onClick={() => this.handleEdit()} class="ui teal small button" type="submit" icon="checkmark" labelPosition="right" content={this.state.editable ? "Save" : "Edit"} />
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ShowEditVideoModal
