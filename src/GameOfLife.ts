export class GameOfLife {
  private constructor(private readonly state: boolean[][]) {}

  static from(state: boolean[][]) {
    return new GameOfLife(state)
  }
}
