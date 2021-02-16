import "./Tile.css";
export default function Tile(props){
    var number = props.tileNumber
    if(number%2 === 0){
        return(<div className ="tile blackTile"><img className ={props.image === "assets/images/w_pawn.png" || props.image === "assets/images/b_pawn.png"? "pawn": "pieces"} src={props.image}/></div>)
    }
    else{
        return(<div className ="tile whiteTile"><img className ={props.image === "assets/images/w_pawn.png" || props.image === "assets/images/b_pawn.png" ? "pawn": "pieces"}src={props.image}/></div>)
    }
}

