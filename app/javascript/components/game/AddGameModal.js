import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown, Checkbox } from "semantic-ui-react"

class AddGameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { format_state: [], platform_state: null, media_state: null, vr_state: false };
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handlePlatformChange = this.handlePlatformChange.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.handleVrChange = this.handleVrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let genre = this.state.genre_state;
    let platform = this.state.platform_state;
    let media = this.state.media_state;
    let publisher = e.target.publisher.value;
    let rating = e.target.rating.value;
    let vr = this.state.vr;
    this.props.handleFormSubmit(title, genre, platform, media, publisher, rating, vr);
  }
  handleGenreChange(e, {value}) {
    this.setState({genre_state: value})
  }
  handleMediaChange(e, {value}) {
    this.setState({ media_state: value})
  }
  handlePlatformChange(e, {value}) {
    this.setState({ platform_state: value})
  }
  handleVrChange(e, {value}) {
    this.setState({ vr: value})
  }

  render () {
    let formFields = {};
    let genreOptions = [
      { key: 'Action', text: 'Action', value: 'Action' },
      { key: 'Adventure', text: 'Adventure', value: 'Adventure' },
      { key: 'First Person Shooter', text: 'First Person Shooter', value: 'First Person Shooter' },
      { key: 'MMO', text: 'MMO', value: 'MMO' },
      { key: 'Puzzle', text: 'Puzzle', value: 'Puzzle' },
      { key: 'Racing', text: 'Racing', value: 'Racing' },
      { key: 'Real Time', text: 'Real Time', value: 'Real Time' },
      { key: 'Role Playing', text: 'Role Playing', value: 'Role Playing' },
      { key: 'Sport', text: 'Sport', value: 'Sport' },
      { key: 'Simulation', text: 'Simulation', value: 'Simulation' },
      { key: 'Strategy', text: 'Strategy', value: 'Strategy' },
      { key: 'Turn Based', text: 'Turn Based', value: 'Turn Based' },
    ];
    let platformOptions = [
      { key: 'PC', text: 'PC', value: 'PC' },
      { key: 'Playstation 4', text: 'Playstation 4', value: 'Playstation 4' },
      { key: 'Playstation 5', text: 'Playstation 5', value: 'Playstation 5' },
      { key: 'XBox', text: 'XBox', value: 'XBox' },
    ];
    let mediaOptions = [
      { key: 'Battle.net', text: 'Battle.net', value: 'Battle.net' },
      { key: 'Bluray', text: 'Bluray', value: 'Bluray' },
      { key: 'CD', text: 'CD', value: 'CD' },
      { key: 'DVD', text: 'DVD', value: 'DVD' },
      { key: 'ISO', text: 'ISO', value: 'ISO' },
      { key: 'Steam', text: 'Steam', value: 'Steam' },
    ];
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="New Game" />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="title" ref={input => formFields.title = input} placeholder="Title" /></div>
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
                <label>Platform</label>
                <div class="seven wide field">
                  <Dropdown name="platform" placeholder='Platform' fluid selection options={platformOptions} onChange={this.handlePlatformChange} />
                </div>
              </div>
              <div class="field">
                <label>Media</label>
                <div class="seven wide field">
                  <Dropdown name="media" placeholder='Media' fluid selection options={mediaOptions} onChange={this.handleMediaChange} />
                </div>
              </div>
              <div class="field">
                <label>Publisher</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="publisher" ref={input => formFields.publisher = input} placeholder="Publisher" /></div>
                </div>
              </div>
              <div class="field">
                <label>Rating</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" name="rating" ref={input => formFields.rating = input} placeholder="Rating" /></div>
                </div>
              </div>
              <div class="field">
                <label></label>
                <div class="seven wide field">
                  <div class="ui input">
                    <Checkbox name="vr" fitted toggle label='VR' onChange={this.handleVrChange} />
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

export default AddGameModal
