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
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }
  handleFormSubmit(title, video_type, genre, year, season, rating, format, location, digital_copy, digital_copy_location) {
    let body = JSON.stringify({video: {title: title, video_type: video_type, genre: genre, year: year, season: season, rating: rating, format: format, location: location, digital_copy: digital_copy, digital_copy_location: digital_copy_location }});
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
  handleUpdate(video) {
    fetch('http://localhost:3000/api/v1/videos/' + video.id, {
      method: 'PUT',
      body: JSON.stringify({video: video}),
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => { this.updateVideo(video) })
  }
  updateVideo(video) {
    let newVideos = this.state.videos.filter((f) => f.id !== video.id);
    newVideos.push(video);
    this.setState({ videos: newVideos })
  }
  handleDelete(id) {
    fetch('http://localhost:3000/api/v1/videos/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => {this.deleteVideo(id)})
  }
  deleteVideo(id) {
    let newVideos = this.state.videos.filter((video) => video.id !== id)
    this.setState({ videos: newVideos })
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
        <VideoIndex videos={this.state.videos} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </React.Fragment>
    );
  }
}

export default VideoContainer
