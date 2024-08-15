import { GameOfLife } from "./GameOfLife.js"

export class GameLoader {
  parse(string: string): GameOfLife {
    return GameOfLife.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])
  }
}
