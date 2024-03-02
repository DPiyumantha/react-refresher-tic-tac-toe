import { useState } from "react";
import Square from "./Square";
import React from "react";

export default function Board(props) {
  const { squares, setSquares, winner, setWinner } = props;

  const [nextValue, setNextValue] = useState('X');



  function handleClick(i) {
    if (squares[i] || winner) {
      return
    }
    const copySquares = squares.slice();
    copySquares[i] = nextValue
    setSquares(copySquares);
    nextValue == 'X' ? setNextValue('O') : setNextValue('X')
    calculateWinner(copySquares)
  }

  function calculateWinner(squares) {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a])
        return squares[a];
      }
    }
    return null;
  }




  return <>
    {winner ? <h1>Winner 🏆 {winner}</h1> : <h5>Next Player {nextValue}</h5>}


    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
      <Square value={squares[1]} onSquareClick={() => { handleClick(1) }} />
      <Square value={squares[2]} onSquareClick={() => { handleClick(2) }} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => { handleClick(3) }} />
      <Square value={squares[4]} onSquareClick={() => { handleClick(4) }} />
      <Square value={squares[5]} onSquareClick={() => { handleClick(5) }} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => { handleClick(6) }} />
      <Square value={squares[7]} onSquareClick={() => { handleClick(7) }} />
      <Square value={squares[8]} onSquareClick={() => { handleClick(8) }} />
    </div>
  </>;
}