import React from 'react';

import Square from './Square';

function Board() {
  return (
    <div>
      <div className="board-row">
        {Square(0)}
        {Square(1)}
        {Square(2)}
      </div>
      <div className="board-row">
        {Square(3)}
        {Square(4)}
        {Square(5)}
      </div>
      <div className="board-row">
        {Square(6)}
        {Square(7)}
        {Square(8)}
      </div>
    </div>
  );
}
export default Board;