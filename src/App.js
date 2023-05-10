import { useState, useEffect } from "react";
import './App.css';
import Cell from "./Cell";

const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
  const [go, setGo] = useState('circle')
  const [winningMessage, setWinningMessage] = useState(null)
  const message = "It is now " + go + " 's turn. "

  console.log(cells)

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    let winner = null;

    winningCombos.forEach(array => {
      if (cells[array[0]] === cells[array[1]] && cells[array[1]] === cells[array[2]] && cells[array[0]] !== '') {
        winner = cells[array[0]];
      }
    })

    if (winner !== null) {
      setWinningMessage(`${winner} Wins!`);
    }
    else if (cells.every(cell => cell !== '')) {
      setWinningMessage("It's a draw!");
    }
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  const handleCellChange = (className, id) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell
      }
    });
    setCells(nextCells)
  };

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) =>
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
            handleCellChange={handleCellChange} />)}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  )
}

export default App;