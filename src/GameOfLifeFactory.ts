import fs from "fs"
import { Console } from "./Console.js"
import { GameLoader } from "./GameLoader.js"
import { Clock } from "./Clock.js"

export class GameOfLifeFactory {
  constructor(
    private readonly console: Console,
    private readonly clock: Clock,
  ) {}

  async execute(file: string, generations: number) {
    const input = fs.readFileSync(file, "utf-8")
    const gameOfLife = new GameLoader().parse(input)

    this.console.clear()
    for (let i = 0; i < generations; i++) {
      gameOfLife.nextGeneration()
      this.console.log(gameOfLife.toString())
      await this.clock.sleep(100)
      this.console.clear()
    }
  }
}
