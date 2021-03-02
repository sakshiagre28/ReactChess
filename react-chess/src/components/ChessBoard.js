import { computeHeadingLevel } from "@testing-library/react";
import { React, useEffect, useRef, useState } from "react";
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
    let activePiece = null;
function grabPiece(e){
    const element = e.target 
    if(element.classList.contains("pieces") || element.classList.contains("pawn")){
        
        const x = e.clientX - 50
        const y = e.clientY - 50
        element.style.position =  "absolute"
        element.style.left = x+"px";
        element.style.top = y+"px" ; 
        activePiece = element
    }
}


function movePiece(e){
    const chessboard = chessBoardRef.current
    if(activePiece && chessboard){
        const minX = chessboard.offsetLeft - 25
        const minY = chessboard.offsetTop - 25
        const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75
        const maxY = chessboard.offsetTop + chessboard.clientHeight -75
        const x = e.clientX - 50
        const y = e.clientY - 50
        activePiece.style.position =  "absolute"
       // activePiece.style.left = x+"px";
        //activePiece.style.top = y+"px" ; 
        activePiece.style.left = x < minX ? minX+"px" : x > maxX ? maxX+"px" : x+"px"
        activePiece.style.top = y < minY ? minY+"px" : y > maxY ? maxY+"px" : y+"px"
    }
}

function dropPiece(e){
    if(activePiece){
        activePiece = null
    }
}
    const chessBoardRef = useRef(null)

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
           board.push(<Tile key = {j+","+i} tileNumber = {number} image = {image} />)
              
        }
    }
    
    return(
    <div onMouseDown = {e => grabPiece(e)} 
         onMouseMove = {e => movePiece(e)} 
         onMouseUp = {e=> dropPiece(e)}
         className = "chessboard"
         ref = {chessBoardRef}>
        {board}
    </div>)
}
export default ChessBoard