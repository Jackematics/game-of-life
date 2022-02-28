import { Status } from './status';

export default class Cell {
  private status: Status;
  private liveNeighbours: number = 0;

  constructor(status: Status) {
    this.status = status;
  }

  public getStatus(): Status {
    return this.status;
  }

  public getLiveNeighbours(): number {
    return this.liveNeighbours;
  }

  public setLiveNeighbours(liveNeighbours: number): void {
    this.liveNeighbours = liveNeighbours;
  }

  public tick(): void {
    if (this.status === Status.ALIVE) {
      this.status =
        this.liveNeighbours === 2 || this.liveNeighbours === 3
          ? Status.ALIVE
          : Status.DEAD;
    } else {
      this.status = this.liveNeighbours === 3 ? Status.ALIVE : Status.DEAD;
    }
  }
}
