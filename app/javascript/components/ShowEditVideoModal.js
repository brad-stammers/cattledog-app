import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal } from "semantic-ui-react"
class ShowEditVideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    if (this.state.editable) {
      let title = this.title.value;
      let genre = this.genre.value;
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
  render () {
    let formFields = {};
    let title = this.state.editable ? <input type="text" ref={input => this.title = input} defaultValue={this.props.video.title} /> : <h5>{this.props.video.title}</h5>;
    let genre = this.state.editable ? <input type="text" ref={input => this.genre = input} defaultValue={this.props.video.genre} /> : <h5>{this.props.video.genre}</h5>;
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
              this.props.handleEdit(formFields.title.value, formFields.genre.value, formFields.year.value, formFields.rating.value, formFields.format.value, formFields.location.value);
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
