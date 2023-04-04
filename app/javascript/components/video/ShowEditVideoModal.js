import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown, Checkbox } from "semantic-ui-react"

class ShowEditVideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, genre_state: props.video.genre, format_state: props.video.format, type_state: props.video.video_type, digital_state: props.video.digital_copy, digital_location_state: props.video.digital_copy_location };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDigitalChange = this.handleDigitalChange.bind(this);
    this.handleDigitalLocationChange = this.handleDigitalLocationChange.bind(this);
  }
  handleEdit(e) {
    e.preventDefault();
    if (this.state.editable) {
      let title = e.target.title.value;
      let video_type = this.state.type_state;
      let genre = this.state.genre_state;
      let year = e.target.year.value;
      let season = "";
      if (video_type != "Movie") {
        season = e.target.season.value;
      }
      let rating = e.target.rating.value;
      let format = this.state.format_state;
      let location = e.target.location.value;
      let digital_copy = this.state.digital_state;
      let digital_copy_location = this.state.digital_location_state;
      let id = this.props.video.id;
      let video = { id: id, title: title, video_type: video_type, genre: genre, year: year, season: season, rating: rating, format: format, location: location, digital_copy: digital_copy, digital_copy_location: digital_copy_location };
      this.props.handleUpdate(video);
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
  handleTypeChange(e, {value}) {
    this.setState({ type_state: value})
  }
  handleDigitalChange = (e, data) => {
    this.setState({ digital_state: data.checked})
  }
  handleDigitalLocationChange(e, {value}) {
    this.setState({ digital_location_state: value})
  }
  render () {
    let formFields = {};
    let checked_digital = this.props.video.digital_copy ? 'defaultChecked' : ''
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
    let dsp_genre = this.props.video.genre.map((genre) =>
      <div class="ui small grey horizontal label">{genre}</div>
    );
    let dsp_format = this.props.video.format.map((format) =>
      <div class="ui small grey horizontal label">{format}</div>
    );
    let dsp_digital_location = this.props.video.digital_copy_location.map((digital_location) =>
      <div class="ui small grey horizontal label">{digital_location}</div>
    );
    let title = this.state.editable ? <input type="text" name="title" ref={input => formFields.title = input} defaultValue={this.props.video.title} /> : <h5>{this.props.video.title}</h5>;
    let video_type = this.state.editable ? <Dropdown name="video_type" placeholder='Type' fluid selection options={typeOptions} defaultValue={this.props.video.video_type} onChange={this.handleTypeChange} /> : <div class="ui input"><h5>{this.props.video.video_type}</h5></div>;
    let genre = this.state.editable ? <Dropdown name="genre" placeholder='Genre' fluid multiple selection options={genreOptions} defaultValue={this.props.video.genre} onChange={this.handleGenreChange} /> : <div>{dsp_genre}</div>;
    let year = this.state.editable ? <input type="text" name="year" ref={input => formFields.year = input} defaultValue={this.props.video.year} /> : <h5>{this.props.video.year}</h5>;
    let rating = this.state.editable ? <input type="text" name="rating" ref={input => formFields.rating = input} defaultValue={this.props.video.rating} /> : <h5>{this.props.video.rating}</h5>;
    let format = this.state.editable ? <Dropdown name="format" placeholder='Format' fluid multiple selection options={formatOptions} defaultValue={this.props.video.format} onChange={this.handleFormatChange} /> : <div>{dsp_format}</div>;
    let season = this.state.editable ? <input type="text" name="season" ref={input => formFields.season = input} defaultValue={this.props.video.season} /> : <h5>{this.props.video.season}</h5>;
    let location = this.state.editable ? <input type="text" name="location" ref={input => formFields.location = input} defaultValue={this.props.video.location} /> : <h5>{this.props.video.location}</h5>;
    let digital_copy = this.state.editable ? <Checkbox name="digital_copy" fitted toggle label='Digital Copy' defaultChecked={this.props.video.digital_copy} onChange={(event, data) => this.handleDigitalChange(event, data)} /> : <Checkbox name="digital_copy" placeholder='Digital Copy' fitted toggle label='Digital Copy' defaultChecked={this.props.video.digital_copy} disabled />;
    let digital_location = this.state.editable ? <Dropdown name="digital_copy_location" placeholder='Digital Copy Location' fluid multiple selection options={digitalOptions} defaultValue={this.props.video.digital_copy_location} onChange={this.handleDigitalLocationChange} /> : <div>{dsp_digital_location}</div>;
    let dsp_season = this.state.type_state != "Movie" ? <div class="field"><label>Season</label><div class="seven wide field"><div class="ui input">{season}</div></div></div> : null;
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
                <label>Type</label>
                <div class="seven wide field">
                  <div class="ui input">{video_type}</div>
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
              {dsp_season}
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
              <div class="field">
                <label></label>
                <div class="seven wide field">
                  <div class="ui input">{digital_copy}</div>
                </div>
              </div>
              <div class="field">
                <label>Digital Copy Location</label>
                <div class="seven wide field">
                  <div class="ui input">{digital_location}</div>
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

export default ShowEditVideoModal
