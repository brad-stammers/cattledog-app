import React from "react"
import PropTypes from "prop-types"
import Game from "./Game"

class GameIndex extends React.Component {
  render () {
    var games = this.props.games.map((game) => {
      return(
        <tr key={game.id} scope="row">
          <Game game={game} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} />
        </tr>
      )
    })
    return (
      <React.Fragment>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Platform</th>
              <th>Media</th>
              <th>VR</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {games}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default GameIndex
