import React, {useState} from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown, Checkbox } from "semantic-ui-react"

class AddVideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { genre_state: [], format_state: [], type_state: null, digital_state: false, digital_location_state: [] };
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDigitalChange = this.handleDigitalChange.bind(this);
    this.handleDigitalLocationChange = this.handleDigitalLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let genre = this.state.genre_state;
    let year = e.target.year.value;
    let rating = e.target.rating.value;
    let format = this.state.format_state;
    let location = e.target.location.value;
    let video_type = this.state.type_state;
    let season = e.target.season.value;
    let digital_copy = this.state.digital_state;
    let digital_copy_location = this.state.digital_location_state;
    this.props.handleFormSubmit(title, video_type, genre, year, season, rating, format, location, digital_copy, digital_copy_location);
  }
  handleGenreChange(e, {value}) {
    this.setState({ genre_state: value})
  }
  handleFormatChange(e, {value}) {
    this.setState({ format_state: value})
  }
  handleTypeChange(e, {value}) {
    this.setState({ type_state: value})
  }
  handleDigitalChange(e, {value}) {
    this.setState({ digital_state: value})
  }
  handleDigitalLocationChange(e, {value}) {
    this.setState({ digital_location_state: value})
  }

  render () {
    let formFields = {};
    let typeOptions = [
      { key: 'Movie', text: 'Movie', value: 'Movie' },
      { key: 'TV Show', text: 'TV Show', value: 'TV Show' },
    ];
    let genreOptions = [
      { key: 'Action', text: 'Action', value: 'Action' },
      { key: 'Comedy', text: 'Comedy', value: 'Comedy' },
      { key: 'Drama', text: 'Drama', value: 'Drama' },
      { key: 'Fantasy', text: 'Fantasy', value: 'Fantasy' },
      { key: 'Romance', text: 'Romance', value: 'Romance' },
      { key: 'Science Fiction', text: 'Science Fiction', value: 'Science Fiction' },
      { key: 'Thriller', text: 'Thriller', value: 'Thriller' },
    ];
    let formatOptions = [
      { key: 'DVD', text: 'DVD', value: 'DVD' },
      { key: 'Bluray', text: 'Bluray', value: 'Bluray' },
      { key: 'Bluray 3D', text: 'Bluray 3D', value: 'Bluray 3D' },
      { key: 'Digital', text: 'Digital', value: 'Digital' },
    ];
    let digitalOptions = [
      { key: 'HDD', text: 'HDD', value: 'HDD' },
      { key: 'iTunes', text: 'iTunes', value: 'iTunes' },
      { key: 'Google Play', text: 'Google Play', value: 'Google Play' },
    ];
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="New Video" />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="title" ref={input => formFields.title = input} placeholder="Title" /></div>
                </div>
              </div>
              <div class="field">
                <label>Type</label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Dropdown name="video_type" placeholder='Type' fluid selection options={typeOptions} onChange={this.handleTypeChange} />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Dropdown name="genre" placeholder='Genre' fluid multiple selection options={genreOptions} onChange={this.handleGenreChange} />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Season</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="season" ref={input => formFields.season = input} placeholder="Season" /></div>
                </div>
              </div>
              <div class="field">
                <label>Year</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="year" ref={input => formFields.year = input} placeholder="Year" /></div>
                </div>
              </div>
              <div class="field">
                <label>Rating</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="rating" ref={input => formFields.rating = input} placeholder="Rating" /></div>
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
                <label></label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Checkbox name="digital_copy" fitted toggle label='Digital Copy' onChange={this.handleDigitalChange} />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Digital Copy Location</label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Dropdown name="digital_copy_location" placeholder='Digital Copy Location' fluid multiple selection options={digitalOptions} onChange={this.handleDigitalLocationChange} />
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

export default AddVideoModal
