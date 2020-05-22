import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <Board />
    </div>
  );
}

export default App;

debugger


//input
const Square = (props) => {
  if (props.index % 2 === 0) {
    return (
      <button style={{ width: "100px", height: "100px", backgroundColor: "black" }}>{props.value} </button>
    );
  }
  else {
    return (
      <button style={{ width: "100px", height: "100px" }}>{props.value} </button>
    )
  }
}

const Board = (index) => {

  //copy board
  const [board, setBoard] = useState(Array(9).fill(null));


  //render the board
  const render = (index) => {
    return (
      <Square index={index} value={board[index]}></Square>
    );
  }
  return (

    <div>

      <div>{render(0)}{render(1)}{render(2)}</div>
      <div>{render(3)}{render(4)}{render(5)}</div>
      <div>{render(6)}{render(7)}{render(8)}</div>
    </div>
  );

}