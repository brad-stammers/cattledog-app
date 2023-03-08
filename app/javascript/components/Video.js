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
    return (
      <React.Fragment>
        <td>{this.props.video.title}</td>
        <td>{this.props.video.genre}</td>
        <td>{this.props.video.year}</td>
        <td>{this.props.video.rating}</td>
        <td>{this.props.video.format}</td>
        <td>{this.props.video.location}</td>
        <td>
          <button onClick={this.showModal} class="ui teal small button">Show</button>
          <button onClick={() => this.props.handleDelete(this.props.video.id)}  class="ui small button">Delete</button>
        </td>
        <ShowEditVideoModal visible={this.state.show_visible} handleCancel={this.handleCancel} handleUpdate={this.props.handleUpdate} video={this.props.video} />
      </React.Fragment>
    );
  }
}

export default Video
