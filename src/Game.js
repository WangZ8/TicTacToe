import React, { useState } from 'react';
import Board from './Board';


function Game() {
  const [boardsquares, setBoardSquares] = useState(Array(9).fill(null));
  const [boardhistory, setBoardHistory] = useState([{squares: boardsquares}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext((step % 2) ? false : true);
  }

  function handleClick(i) {
    const history = boardhistory.slice(0, stepNumber+1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setBoardSquares(squares);
    setBoardHistory(history.concat([{
      squares: boardsquares
    }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  }
  
  const history = boardhistory;
  const current = history[stepNumber];
  const winner = calculateWinner(boardsquares);
  let status;
  if(winner){
    status = 'Winner: ' + winner;
  }else{
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  const moves = history.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start';
    return (
      <li key={move}>
        <a href="#" onClick={() => jumpTo(move)}>{desc}</a>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {<Board squares = {boardsquares} onClick={(i)=>handleClick(i)}/>}
      </div>
      <div className="game-info">
         <div>{ status }</div>
         <ol>{ moves }</ol>
       </div>
    </div>
  );
}
export default Game;