import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-slate-300 border- border-black border-2 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(Squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }
  function handClick(i) {
    if (Squares[i] || calculateWinner(Squares)) {
      return;
    } else {
      const nextSquares = Squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  }
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={Squares[0]} onSquareClick={() => handClick(0)}></Square>
        <Square value={Squares[1]} onSquareClick={() => handClick(1)}></Square>
        <Square value={Squares[2]} onSquareClick={() => handClick(2)}></Square>
      </div>
      <div className="flex">
        <Square value={Squares[3]} onSquareClick={() => handClick(3)}></Square>
        <Square value={Squares[4]} onSquareClick={() => handClick(4)}></Square>
        <Square value={Squares[5]} onSquareClick={() => handClick(5)}></Square>
      </div>
      <div className="flex">
        <Square value={Squares[6]} onSquareClick={() => handClick(6)}></Square>
        <Square value={Squares[7]} onSquareClick={() => handClick(7)}></Square>
        <Square value={Squares[8]} onSquareClick={() => handClick(8)}></Square>
      </div>
    </>
  );
}

function calculateWinner(Squares) {
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
    if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
      return Squares[a];
    }
  }
  return null;
}
