import React from "react"
import PropTypes from "prop-types"
import ShowEditVideoModal from "./ShowEditVideoModal"

class Video extends React.Component {
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
    let dsp_genre = this.props.video.genre.map((genre) =>
      <div class="ui small blue horizontal label">{genre}</div>
    );
    let dsp_format = this.props.video.format.map((format) =>
      <div class="ui small grey horizontal label">{format}</div>
    );
    let dsp_digital = this.props.video.digital_copy ? "Yes" : "No"
    return (
      <React.Fragment>
        <td>{this.props.video.title}</td>
        <td>{this.props.video.video_type}</td>
        <td>{dsp_genre}</td>
        <td>{this.props.video.year}</td>
        <td>{this.props.video.rating}</td>
        <td>{dsp_format}</td>
        <td>{dsp_digital}</td>
        <td>
          <button onClick={this.showModal} class="ui teal small button">Show</button>
          <button onClick={() => this.props.handleDelete(this.props.video.id)}  className="ui small button">Delete</button>
        </td>
        <ShowEditVideoModal visible={this.state.show_visible} handleCancel={this.handleCancel} handleUpdate={this.props.handleUpdate} video={this.props.video} />
      </React.Fragment>
    );
  }
}

export default Video
