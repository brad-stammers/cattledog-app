import React from "react"
import PropTypes from "prop-types"
import VideoIndex from "./VideoIndex"

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    fetch('./api/v1/videos.json')
    .then((response) => { return response.json()})
    .then((data) => {this.setState({ videos: data })});
  }
  render () {
    return (
      <React.Fragment>
        <VideoIndex videos={this.state.videos} />
      </React.Fragment>
    );
  }
}

export default VideoContainer
