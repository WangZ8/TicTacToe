import React from 'react';
import Board from './Board';


function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={Array(9).fill(null)}/>
      </div>
    </div>
  );
}
export default Game;