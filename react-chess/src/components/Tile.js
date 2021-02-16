import "./Tile.css";
export default function Tile(props){
    var number = props.tileNumber
    if(number%2 === 0){
        return(<div className ="tile blackTile"><img className ="pieces" src={props.image}/></div>)
    }
    else{
        return(<div className ="tile whiteTile"><img className ="pieces" src={props.image}/></div>)
    }
}

