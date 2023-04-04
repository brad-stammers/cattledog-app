import React from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal, Dropdown, Checkbox } from "semantic-ui-react"

class ShowEditGameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, genre_state: props.game.genre, platform_state: props.game.platform, media_state: props.game.media, vr_state: props.game.vr };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handlePlatformChange = this.handlePlatformChange.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.handleVrChange = this.handleVrChange.bind(this);
  }
  handleEdit(e) {
    e.preventDefault();
    if (this.state.editable) {
      let title = e.target.title.value;
      let genre = this.state.genre_state;
      let platform = this.state.platform_state;
      let media = this.state.media_state;
      let publisher = e.target.publisher.value;
      let rating = e.target.rating.value;
      let vr = this.state.vr_state;
      let id = this.props.game.id;
      let game = { id: id, title: title, genre: genre, platform: platform, media: media, publisher: publisher, rating: rating, vr: vr };
      this.props.handleUpdate(game);
      this.props.handleCancel();
    }
    this.setState({ editable: !this.state.editable });
  }
  handleGenreChange(e, {value}) {
    this.setState({ genre_state: value})
  }
  handlePlatformChange(e, {value}) {
    this.setState({ platform_state: value})
  }
  handleMediaChange(e, {value}) {
    this.setState({ media_state: value})
  }
  handleVrChange = (e, data) => {
    this.setState({ vr_state: data.checked})
  }
  render () {
    let formFields = {};
    let checked_vr = this.props.game.vr ? 'defaultChecked' : ''
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
    let dsp_genre = this.props.game.genre.map((genre) =>
      <div class="ui small grey horizontal label">{genre}</div>
    );
    let title = this.state.editable ? <div class="ui input"><input type="text" name="title" ref={input => formFields.title = input} defaultValue={this.props.game.title} /></div> : <div class="ui disabled input">{this.props.game.title}</div>;
    let genre = this.state.editable ? <div class="ui input"><Dropdown name="genre" placeholder='Genre' fluid multiple selection options={genreOptions} defaultValue={this.props.game.genre} onChange={this.handleGenreChange} /></div> : <div class="ui input">{dsp_genre}</div>;
    let platform = this.state.editable ? <div class="ui input"><Dropdown name="platform" placeholder='Type' fluid selection options={platformOptions} defaultValue={this.props.game.platform} onChange={this.handlePlatformChange} /></div> : <div class="ui disabled input">{this.props.game.platform}</div>;
    let media = this.state.editable ? <div class="ui input"><Dropdown name="media" placeholder='Format' fluid selection options={mediaOptions} defaultValue={this.props.game.media} onChange={this.handleMediaChange} /></div> : <div class="ui disabled input">{this.props.game.media}</div>;
    let publisher = this.state.editable ? <div class="ui input"><input type="text" name="publisher" ref={input => formFields.publisher = input} defaultValue={this.props.game.publisher} /></div> : <div class="ui disabled input">{this.props.game.publisher}</div>;
    let rating = this.state.editable ? <div class="ui input"><input type="text" name="rating" ref={input => formFields.rating = input} defaultValue={this.props.game.rating} /></div> : <div class="ui disabled input">{this.props.game.rating}</div>;
    let vr = this.state.editable ? <div class="ui input"><Checkbox name="vr" fitted toggle label='VR' defaultChecked={this.props.game.vr} onChange={(event, data) => this.handleVrChange(event, data)} /></div> : <Checkbox name="vr" placeholder='VR' fitted toggle label='VR' defaultChecked={this.props.game.vr} disabled />;
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="Edit Game" />
          <Modal.Content>
            <Form onSubmit={this.handleEdit}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  {title}
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  {genre}
                </div>
              </div>
              <div class="field">
                <label>Platform</label>
                <div class="seven wide field">
                  {platform}
                </div>
              </div>
              <div class="field">
                <label>Media</label>
                <div class="seven wide field">
                  {media}
                </div>
              </div>
              <div class="field">
                <label>Publisher</label>
                <div class="seven wide field">
                  {publisher}
                </div>
              </div>
              <div class="field">
                <label>Rating</label>
                <div class="seven wide field">
                  {rating}
                </div>
              </div>
              <div class="field">
                <label></label>
                <div class="seven wide field">
                  {vr}
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

export default ShowEditGameModal
