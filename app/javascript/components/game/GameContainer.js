import React from "react"
import PropTypes from "prop-types"
import GameIndex from "./GameIndex"
import AddGameModal from "./AddGameModal"

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { games: [], add_visible: false, };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewGame = this.addNewGame.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }
  handleFormSubmit(title, genre, platform, media, publisher, rating, vr) {
    let body = JSON.stringify({game: {title: title, genre: genre, platform: platform, media: media, publisher: publisher, rating: rating, vr: vr }});
    fetch('http://localhost:3000/api/v1/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }).then((response) => {return response.json()})
    .then((game) => {this.addNewGame(game)})
  }
  addNewGame(game) {
    this.setState({ games: this.state.games.concat(game)})
    this.setState({ add_visible: false, });
  }
  handleUpdate(game) {
    fetch('http://localhost:3000/api/v1/games/' + game.id, {
      method: 'PUT',
      body: JSON.stringify({game: game}),
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => { this.updateGame(game) })
  }
  updateGame(game) {
    let newGames = this.state.games.filter((f) => f.id !== game.id);
    newGames.push(game);
    this.setState({ games: newGames })
  }
  handleDelete(id) {
    fetch('http://localhost:3000/api/v1/games/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    }).then((response) => {this.deleteGame(id)})
  }
  deleteGame(id) {
    let newGames = this.state.games.filter((game) => game.id !== id)
    this.setState({ games: newGames })
  }
  showAddModal = () => {
    this.setState({ add_visible: true, });
  }
  handleCancel = () => {
    this.setState({ add_visible: false,});
  }
  loadGames() {
    fetch('./api/v1/games.json')
    .then((response) => { return response.json()})
    .then((data) => {this.setState({ games: data })});
  }

  componentDidMount() {
    this.loadGames();
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={this.showAddModal} className="ui small primary basic button">Add Game</button>
        <AddGameModal visible={this.state.add_visible} handleCancel={this.handleCancel} handleFormSubmit={this.handleFormSubmit} games={this.state.games} />
        <GameIndex games={this.state.games} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </React.Fragment>
    );
  }
}

export default GameContainer
