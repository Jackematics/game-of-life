import { useEffect, useRef, useState } from "react";
import GameOfLife from "../../game-logic/game-of-life";
import { Status } from "../../game-logic/status";
import { Button, Cell, GridWrapper, Grid, Menu, Row } from "./GameGridStyle";

const GameGrid = (props: { game: GameOfLife }) => {
  const [play, setPlay] = useState(false);
  const [disableStart, setDisableStart] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    if (play) {
      intervalRef.current = setInterval(() => {
        props.game.tick();
        setGeneration((gen) => gen + 1);
      }, 100);
    }
  }, [play]);

  const handleStart = () => {
    setPlay(true);
    setDisableStart(true);
  };

  const handleStop = () => {
    setPlay(false);
    setDisableStart(false);
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  const handleReset = () => {
    setPlay(false);
    setDisableStart(false);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    props.game.initialiseGrid(40);
  };

  return (
    <>
      <Menu>
        <Button onClick={handleStart} disabled={disableStart}>
          Start
        </Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Menu>
      <GridWrapper>
        <Grid>
          {props.game.getGrid().map((row, rowIndex) => (
            <Row>
              {props.game.getGrid()[rowIndex].map((cell) => (
                <Cell
                  color={cell.getStatus() === Status.ALIVE ? "black" : "white"}
                />
              ))}
            </Row>
          ))}
        </Grid>
      </GridWrapper>
    </>
  );
};

export default GameGrid;
