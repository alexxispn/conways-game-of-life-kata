import fs from "fs"
import { Console } from "./Console.js"
import { GameLoader } from "./GameLoader.js"

export class GameOfLifeFactory {
  constructor(private readonly console: Console) {}

  execute(file: string, generations: number) {
    const input = fs.readFileSync(file, "utf-8")
    const gameOfLife = new GameLoader().parse(input)

    for (let i = 0; i < generations; i++) {
      gameOfLife.nextGeneration()
      this.console.log(gameOfLife.toString())
    }
  }
}
