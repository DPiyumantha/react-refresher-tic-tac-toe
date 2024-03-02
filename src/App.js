import { useState } from "react";
import Board from "./components/Board";
import React from "react";
// @ts-ignore
import { Button } from "@mui/material/index";
import { Grid } from "../node_modules/@mui/material/index";


export default function App() {
  const [winner, setWinner] = useState(null);
  const [gameState, setGameState] = useState([Array(9).fill(null)]);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function onSqauresChange(input) {
    setSquares(input);
    setGameState([...gameState, input]);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setGameState([Array(9).fill(null)]);
    setWinner(null);
  }

  function restore(i) {
    setSquares(gameState[i])
  }
  function getListItems() {

    return gameState.map((item, i) => i != 0 && <li key={i}><Button onClick={() => restore(i)}>Go to step {i}</Button></li>)
  }

  return <>
    <Grid container>
      <Grid justifyContent="center" alignItems="center" container>
        <Grid justifyContent="center" alignItems="center" item>
          <h1>Tic Tac Toe</h1>
          <h6>React Refresher</h6>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={4} item ></Grid>
        <Grid justifyContent="center" alignItems="center" xs={8} item>
          <Board winner={winner} setWinner={setWinner} squares={squares} setSquares={(input) => onSqauresChange(input)} />
          <br></br>
          {squares.filter((i) => i != null).length > 0 && <div>
            <Button variant='outlined' onClick={reset}>Reset</Button>
          </div>}
          <ul>
            {getListItems()}
          </ul>
        </Grid>
        <Grid xs={4} item ></Grid>
      </Grid>


    </Grid>


  </>
}



