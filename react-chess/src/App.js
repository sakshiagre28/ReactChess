import {React, Component} from 'react'
import Chessboard from "chessboardjsx";
import ChessBoard from './components/ChessBoard';
import "./App.css"
const App  = () => {
  return (
    <div className= "app">
      <ChessBoard/>
    </div>
  );
};

export default App;