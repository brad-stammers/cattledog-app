import React from "react"
import PropTypes from "prop-types"
import VideoIndex from "./VideoIndex"
import AddVideoModal from "./AddVideoModal"

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], add_visible: false, };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewVideo = this.addNewVideo.bind(this);
  }
  handleFormSubmit(name, desc) {
    let body = JSON.stringify({video: {title: title, genre: genre, rating: rating, year: year, format: format, location: location }})
    fetch('http://localhost:3000/api/v1/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }).then((response) => {return response.json()})
    .then((video) => {this.addNewVideo(video)})
  }
  addNewVideo(video) {
    this.setState({ videos: this.state.videos.concat(video)})
    this.setState({ add_visible: false, });
  }
  showAddModal = () => {
    this.setState({ add_visible: true, });
  }
  handleCancel = () => {
    this.setState({ add_visible: false,});
  }
  loadVideos() {
    fetch('./api/v1/videos.json')
    .then((response) => { return response.json()})
    .then((data) => {this.setState({ videos: data })});
  }

  componentDidMount() {
    this.loadVideos();
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={this.showAddModal} className="ui small primary basic button">Add Video</button>
        <AddVideoModal visible={this.state.add_visible} handleCancel={this.handleCancel} handleFormSubmit={this.handleFormSubmit} videos={this.state.videos} />
        <VideoIndex videos={this.state.videos} />
      </React.Fragment>
    );
  }
}

export default VideoContainer
