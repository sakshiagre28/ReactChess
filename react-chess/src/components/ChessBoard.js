import { computeHeadingLevel } from "@testing-library/react";
import { React, useEffect, useState } from "react";
import "./ChessBoard.css"
import Tile from "./Tile";
const horizontalAxis =["a","b","c","d","e","f","g","h"]
const verticalAxis = ["1","2","3","4","5","6","7","8"]

const pieces = []
for(let i = 0 ; i< 8; i++){
    pieces.push({image : 'assets/images/w_pawn.png', x : i  , y : 1})
    pieces.push({image : 'assets/images/b_pawn.png', x : i  , y : 6})
}

for(let p = 0 ; p<2; p++){
    const pieceColor = p===0 ? 'b': 'w'
    const yPos = p === 0? 7: 0
    pieces.push({image : "assets/images/"+pieceColor+"_rook.png", x : 7  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_rook.png", x : 0  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_bishop.png", x : 5  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_bishop.png", x : 2  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_knight.png", x : 6  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_knight.png", x : 1  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_queen.png", x : 3  , y : yPos})
    pieces.push({image : "assets/images/"+pieceColor+"_king.png", x : 4  , y : yPos})
}

function ChessBoard(){
   
    let board =[]
    for(var j=verticalAxis.length-1; j>=0; j--){
        for(var i = 0; i< horizontalAxis.length; i++){
           // console.log("i = "+i+ " j= "+j)
            var number = i+j+2;
            var image = ""
            pieces.forEach((p)=>{
               if(p.x === i && p.y === j){
                    image = p.image
                
                }
            });
           board.push(<Tile tileNumber = {number} image = {image} />)
              
        }
    }
    
    return(
    <div className = "chessboard">
        {board}
    </div>)
}
export default ChessBoard