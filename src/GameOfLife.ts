export class GameOfLife {
  private constructor(private state: boolean[][]) {
  }

  static from(state: boolean[][]) {
    return new GameOfLife(state);
  }

  nextGeneration() {
    const state = [
      [this.state[0][0], this.state[0][1], this.state[0][2]],
      [this.state[1][0], this.state[1][1], this.state[1][2]],
      [this.state[2][0], this.state[2][1], this.state[2][2]]
    ];
    const neighbours = [
      this.state[0][0], this.state[0][1], this.state[0][2],
      this.state[1][0], this.state[1][2],
      this.state[2][0], this.state[2][1], this.state[2][2]
    ];
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

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n");
  }
}
