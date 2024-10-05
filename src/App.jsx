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
  function handClick(i) {
    const nextSquares = Squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
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
