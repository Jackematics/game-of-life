import Cell from './cell';
import RandomHelper from './random-helper';
import { Status } from './status';

export default class GameOfLife {
  private grid: Cell[][] = [];

  public getGrid(): Cell[][] {
    return this.grid;
  }

  public initialiseGrid(dimension: number): void {
    this.generateGrid(dimension);
    this.setAllLiveNeighbours();
  }

  private generateGrid(dimension: number): void {
    this.grid = [];

    for (let row: number = 0; row < dimension; row++) {
      const row: Cell[] = [];
      for (let column: number = 0; column < dimension; column++) {
        const randomStatus =
          Status[Status[RandomHelper.getRandomInt(2)] as keyof typeof Status];
        row.push(new Cell(randomStatus));
      }

      this.grid.push(row);
    }
  }

  public setAllLiveNeighbours(): void {
    for (let row = 0; row < this.grid.length; row++) {
      for (let column = 0; column < this.grid[0].length; column++) {
        this.setLiveNeighbours(row, column);
      }
    }
  }

  private setLiveNeighbours(row: number, column: number): void {
    let liveNeighbours: number = 0;
    for (let subRow: number = row - 1; subRow <= row + 1; subRow++) {
      for (
        let subColumn: number = column - 1;
        subColumn <= column + 1;
        subColumn++
      ) {
        if (this.inGridBounds(subRow) && this.inGridBounds(subColumn)) {
          if (subRow === row && subColumn === column) continue;

          if (this.grid[subRow][subColumn].getStatus() === Status.ALIVE)
            liveNeighbours++;
        }
      }
    }

    this.grid[row][column].setLiveNeighbours(liveNeighbours);
  }

  private inGridBounds(index: number): boolean {
    return -1 < index && index < this.grid.length;
  }

  public tick(): void {
    for (let row = 0; row < this.grid.length; row++) {
      for (let column = 0; column < this.grid[0].length; column++) {
        this.grid[row][column].tick();
      }
    }

    this.setAllLiveNeighbours();
  }
}
