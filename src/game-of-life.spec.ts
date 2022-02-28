import { execPath } from 'process';
import Cell from './cell';
import GameOfLife from './game-of-life';
import RandomHelper from './random-helper';
import { Status } from './status';

describe('`GameOfLife', () => {
  describe('`Generate(n)', () => {
    it('should generate a n x n grid of dead or alive cells', () => {
      const game = new GameOfLife();
      game.initialiseGrid(10);
      const grid: Cell[][] = game.getGrid();
      const randomRow = RandomHelper.getRandomInt(10);
      const randomColumn = RandomHelper.getRandomInt(10);

      expect(grid.length).toEqual(10);
      expect(grid[0].length).toEqual(10);
      expect(
        grid[randomRow][randomColumn].getStatus() === Status.ALIVE ||
          grid[randomRow][randomColumn].getStatus() === Status.DEAD
      ).toBeTruthy();
    });
  });

  describe('setAllLiveNeighbours()', () => {
    it('should set the liveNeighbours value for each cell to the number of adjacent live cells', () => {
      const game = new GameOfLife();
      game.initialiseGrid(10);
      game.setAllLiveNeighbours();

      let liveNeighbourCount: number = 0;
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (j === i && i === 4) continue;

          if (game.getGrid()[i][j].getStatus() === Status.ALIVE) {
            liveNeighbourCount++;
          }
        }
      }

      expect(game.getGrid()[4][4].getLiveNeighbours()).toBe(liveNeighbourCount);
    });

    it('should ignore cells outside the grid', () => {
      const game = new GameOfLife();
      game.initialiseGrid(10);

      let liveNeighbourCount: number = 0;
      for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
          if (j === 0 && i === 0) continue;

          if (game.getGrid()[i][j].getStatus() === Status.ALIVE) {
            liveNeighbourCount++;
          }
        }
      }

      expect(game.getGrid()[0][0].getLiveNeighbours()).toBe(liveNeighbourCount);
    });
  });

  describe('tick()', () => {
    it('should kill / revive all cells on grid depending on live neighbours', () => {
      const game = new GameOfLife();
      game.initialiseGrid(10);

      const cell = game.getGrid()[3][7];
      const statusPreTick = cell.getStatus();
      const liveNeighboursPreTick = cell.getLiveNeighbours();

      game.tick();

      if (statusPreTick === Status.ALIVE) {
        if (liveNeighboursPreTick === 2 || liveNeighboursPreTick === 3) {
          expect(cell.getStatus()).toStrictEqual(Status.ALIVE);
        } else expect(cell.getStatus()).toStrictEqual(Status.DEAD);
      } else {
        if (liveNeighboursPreTick === 3) {
          expect(cell.getStatus()).toStrictEqual(Status.ALIVE);
        } else expect(cell.getStatus()).toStrictEqual(Status.DEAD);
      }
    });
  });
});
