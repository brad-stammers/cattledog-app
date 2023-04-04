import React from "react"
import PropTypes from "prop-types"
import ShowEditGameModal from "./ShowEditGameModal"

class Game extends React.Component {
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
    let dsp_genre = this.props.game.genre.map((genre) =>
      <div class="ui small blue horizontal label">{genre}</div>
    );
    let dsp_vr = this.props.game.vr ? "Yes" : "No"
    return (
      <React.Fragment>
        <td>{this.props.game.title}</td>
        <td>{dsp_genre}</td>
        <td>{this.props.game.platform}</td>
        <td>{this.props.game.media}</td>
        <td>{dsp_vr}</td>
        <td>
          <button onClick={this.showModal} class="ui teal small button">Show</button>
          <button onClick={() => this.props.handleDelete(this.props.game.id)}  className="ui small button">Delete</button>
        </td>
        <ShowEditGameModal visible={this.state.show_visible} handleCancel={this.handleCancel} handleUpdate={this.props.handleUpdate} game={this.props.game} />
      </React.Fragment>
    );
  }
}

export default Game
