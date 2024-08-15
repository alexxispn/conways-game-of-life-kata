import { GameOfLife } from "./GameOfLife.js"

export class GameLoader {
  parse(input: string): GameOfLife {
    const lines = input.trim().split("\n")
    const cells = lines.map((line) => line.split("").map((stringCell) => stringCell === "o"))

    return GameOfLife.from(cells)
  }
}
