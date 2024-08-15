import { GameOfLife } from "./GameOfLife.js"

export class GameLoader {
  parse(string: string): GameOfLife {
    return new GameOfLife([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])
  }
}
