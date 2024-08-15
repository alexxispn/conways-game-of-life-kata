export class GameOfLife {
  private constructor(private state: boolean[][]) {
  }

  static from(state: boolean[][]) {
    return new GameOfLife(state);
  }

  nextGeneration() {
    const state = structuredClone(this.state);
    const neighbours = this.getNeighbours(1, 1);
    const aliveNeighbours = neighbours.filter(cell => cell).length;
    if (aliveNeighbours === 0) {
      state[1][1] = false;
      this.state = state;
      return;
    }
    if (aliveNeighbours === 3) {
      state[1][1] = true;
      this.state = state;
      return;
    }
    if (aliveNeighbours > 3) {
      state[1][1] = false;
      this.state = state;
      return;
    }
  }

  getNeighbours(CoordinateY: number, CoordinateX: number) {
    return [
      this.getCellAt(CoordinateY - 1, CoordinateX - 1), this.getCellAt(CoordinateY - 1, CoordinateX), this.getCellAt(CoordinateY - 1, CoordinateX + 1),
      this.getCellAt(CoordinateY, CoordinateX - 1), this.getCellAt(CoordinateY, CoordinateX + 1),
      this.getCellAt(CoordinateY + 1, CoordinateX - 1), this.getCellAt(CoordinateY + 1, CoordinateX), this.getCellAt(CoordinateY + 1, CoordinateX + 1)
    ];
  }

  private getCellAt(CoordinateY: number, CoordinateX: number): boolean {
    if (CoordinateX < 0 || CoordinateY < 0) {
      return false;
    }
    return this.state[CoordinateY][CoordinateX];
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n");
  }
}
