import React from "react"
import PropTypes from "prop-types"
import Video from "./Video"
class VideoIndex extends React.Component {
  render () {
    var videos = this.props.videos.map((video) => {
      return(
        <tr key={video.id} scope="row">
          <Video video={video} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} />
        </tr>
      )
    })
    return (
      <React.Fragment>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Format</th>
              <th>Digital Copy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {videos}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default VideoIndex
