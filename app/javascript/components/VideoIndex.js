import React from "react"
import PropTypes from "prop-types"
class VideoIndex extends React.Component {
  render () {
    var videos = this.props.videos.map((video) => {
      return(
        <tr key={video.id}>
          <td><strong>{video.title}</strong></td>
          <td>{video.genre}</td>
        </tr>
      )
    })
    return (
      <React.Fragment>
        <table>
          <thead>
            <th>Title</th>
            <th>Genre</th>
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
