import { React } from "react";
import "./ChessBoard.css"
const horizontalAxis =["a","b","c","d","e","f","g","h"]
const verticalAxis = ["1","2","3","4","5","6","7","8"]
function ChessBoard(){
    let board =[]
    for(let i=verticalAxis.length-1; i>=0; i--){
        for(let j = 0; j< horizontalAxis.length; j++){
            var number = i+j+2;
           
            if(number%2 ===0){
                board.push(<div className ="blackTile">{horizontalAxis[j]}{verticalAxis[i]} </div>)
            }
            else{
                board.push(<div className ="whiteTile">{horizontalAxis[j]}{verticalAxis[i]} </div>)
            }
              
        }
    }
    
    return(
    <div className = "chessboard">
        {board}
    </div>)
}
export default ChessBoard