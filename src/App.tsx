import "./App.css";
import GameGrid from "./components/game-grid/GameGrid";
import GameOfLife from "./game-logic/game-of-life";

function App() {
  const game = new GameOfLife();
  game.initialiseGrid(40);

  return (
    <div className="App">
      <header>
        <h1>Game of Life</h1>
      </header>
      <GameGrid game={game} />
    </div>
  );
}

export default App;
