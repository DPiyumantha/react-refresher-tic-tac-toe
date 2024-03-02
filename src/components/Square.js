import React from "react";

export default function Square(props){
    const {value, onSquareClick} = props;
    
  
    // const [value, setValue] = useState(null);
    // function handleClick(){
    //   setValue('X')
    // }
    return <button className="square" onClick={onSquareClick}>{value}</button>
  }