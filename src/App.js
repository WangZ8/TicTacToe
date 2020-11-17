import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Game.css';
import Game from './Game.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tic-Tac-Toe Game</h2>
        </div>
        <p className="App-intro">
          <Game></Game>
        </p>
      </div>
    );
  }
}

export default App;
