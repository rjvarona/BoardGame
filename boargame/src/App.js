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


//squares
const Square = (props) => {

  if (props.startBlack) {
    if (props.index % 2 == 0) {
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
  else{
    if (props.index % 2 == 0) {
      return (
        <button style={{ width: "100px", height: "100px" }}>{props.value} </button>
      );
    }
    else {
      return (
        <button style={{ width: "100px", height: "100px", backgroundColor: "black" }}>{props.value} </button>
      )
    }
  }
}




const Board = (props) => {

  //copy board
  const [board, setBoard] = useState(Array(9).fill(null));


  //boardValue
  const [boardValue, setboardValue] = useState(3);


  //render squares
  const renderSquare = (row) => {
    let children = []
    for (let i = 0; i < (boardValue); i++) {
      if (row % 2 === 0) {
        children.push(
          <Square index={i} value={board[i]} startBlack={true}></Square>
        );
      }
      else{
        children.push(
          <Square index={i} value={board[i]} startBlack={false}></Square>
        );
      }
    }

    return children;
  }

  //render the board
  const render = () => {
    let children = []
    for (let i = 0; i < (boardValue); i++) {

      children.push(
        <div>{renderSquare(i)}</div>
      );
    }

    return children;
  }

  //update Board
  const onChangeValue = (e) => {
    setboardValue(e.target.value);
  }

  const updateBoard = () => {
    setBoard(Array(boardValue).fill(boardValue))
    render()
  }

  return (
    //
    // <a href="#" onClick={() => { props.update(props.value) }}>Update Squares Board </a>
    <div>
      <input value={boardValue} onChange={onChangeValue.bind(this)}>
      </input>


      {/* update the board */}

      {render()}
    </div>
  );

}