import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Square/>
    </div>
  );
}

export default App;

debugger
//
const Square = (props) => {
    return(
      <button style={{width: "100px", height:"100px" }} onClick={props.onClick}>{props.value} </button>
    );
}
