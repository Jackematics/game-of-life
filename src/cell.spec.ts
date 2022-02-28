import Cell from './cell';
import { Status } from './status';

describe('a live cell', () => {
  it('should die if it has fewer than two neighbours', () => {
    const cell = new Cell(Status.ALIVE);
    cell.setLiveNeighbours(1);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.DEAD);
  });

  it('should die if it has more than three neighbours', () => {
    const cell = new Cell(Status.ALIVE);
    cell.setLiveNeighbours(4);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.DEAD);
  });

  it('should live if it has two neighbours', () => {
    const cell = new Cell(Status.ALIVE);
    cell.setLiveNeighbours(2);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.ALIVE);
  });

  it('should live if it has two neighbours', () => {
    const cell = new Cell(Status.ALIVE);
    cell.setLiveNeighbours(3);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.ALIVE);
  });
});

describe('a dead cell', () => {
  it('should come back to life if it has exactly than three neighbours', () => {
    const cell = new Cell(Status.DEAD);
    cell.setLiveNeighbours(3);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.ALIVE);
  });

  it('should remain dead otherwise', () => {
    const cell = new Cell(Status.DEAD);
    cell.setLiveNeighbours(2);
    cell.tick();

    expect(cell.getStatus()).toBe(Status.DEAD);
  });
});
